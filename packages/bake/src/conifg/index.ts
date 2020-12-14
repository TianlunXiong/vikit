import { cssRule } from './webpack/webpack.config.base';
import dev from './webpack/webpack.config.dev';
import prod from './webpack/webpack.config.prod';
import {
  getCustomConfig,
  projectRelative,
  createEntryProxy,
  PageInfo,
} from './utils';
import { Configuration } from 'webpack';
import webpackMerge from 'webpack-merge';
import { StatsWriterPlugin } from 'webpack-stats-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import rimraf from 'rimraf';
import fs from 'fs';

const DIST_NAME = 'dist';

type WebpackConfigType = 'dev' | 'prod';

function getWebpackConfig(type: WebpackConfigType): Configuration {
  const { app, pages, boot, html, css = 'style', ...webpackConfig } = getCustomConfig();

  let config: Configuration = {};

  switch (type) {
    case 'dev':
      // 增加 react-refresh/babel 热替换插件
      if (dev.module?.rules?.[0]) {
        // @ts-ignore
        dev.module.rules[0]?.use[0]?.options.plugins.push([
          require.resolve('react-refresh/babel'),
        ]);
      }
      if (css === 'style') {
      // 增加 css-hot-loader 热替换插件
      if (dev.module?.rules?.[1]) {
        // @ts-ignore
        dev.module.rules[1]?.use?.unshift(
          {
            loader: 'css-hot-loader',
            options: {

            },
          }
        );
      }
      // 增加 css-hot-loader 热替换插件
      if (dev.module?.rules?.[2]) {
        // @ts-ignore
        dev.module.rules[2]?.use?.unshift({
          loader: 'css-hot-loader',
          options: {},
        });
      }
      }
      config = dev;
      break;
    case 'prod':
      config = prod;
      break;
    default:
      throw new Error('无效类型参数');
  }

  config = webpackMerge(config, cssRule(css));

  if (!html) {
    throw new Error('请指定 html 文件');
  }

  const htmlPath = projectRelative(html);
  const htmls: HtmlWebpackPlugin[] = [];

  config.entry = {};
  if (pages) {
    const pathInfo: PageInfo[] = [];
    const nameToDirnameMapping = {};
    const nameToFilenameMapping = {};
    const nameToHtmlFilenameMapping = {};

    for (let i = 0; i < pages.length; i += 1) {
      const fullPath = projectRelative(pages[i]);

      const pagePathArr = fullPath.split('/');
      const pageDir = pagePathArr.indexOf('page');
      if (pageDir === -1) {
        throw new Error('页面组件需要放到 page 文件夹下面');
      }
      const validPagePathArr = pagePathArr.slice(pageDir);
      const dirName = validPagePathArr.slice(0, validPagePathArr.length - 1);
      const fileName = validPagePathArr[validPagePathArr.length - 1];
      const fileNameSplitted = fileName.split('.');
      const filePureName = fileNameSplitted
      .slice(0, fileNameSplitted.length - 1)
      .join('.')
      let name = `${validPagePathArr
        .slice(0, validPagePathArr.length - 1)
        .join('-')}-${filePureName}`;
      const preDirname = `${validPagePathArr
        .slice(0, validPagePathArr.length - 1)
        .join('/')}`;

      const ext = fileNameSplitted[fileNameSplitted.length - 1];
      if (name && ext) {
        const chunkName = `${dirName.join('/')}/${filePureName}`;
        nameToDirnameMapping[name] = chunkName;
        nameToFilenameMapping[name] = `${preDirname}/${filePureName}.js`;
        nameToHtmlFilenameMapping[name] = `${preDirname}/${filePureName}.html`;
        pathInfo.push({
          name,
          loc: fullPath,
          ext,
          boot: boot ? projectRelative(boot) : undefined,
        });
      } else if (!name) {
        throw new Error('无效文件名');
      } else if (!ext) {
        throw new Error('请完善文件后缀');
      }
    }

    const proxyEntryInfo = createEntryProxy(pathInfo) || [];

    
    const { entry } = config;
    proxyEntryInfo.forEach(({ name, loc }) => {
      if (name && loc) {
        const entryName = nameToDirnameMapping[name];
        entry[entryName] = {
          import: loc,
          filename: nameToFilenameMapping[name],
        };
        htmls.push(
          new HtmlWebpackPlugin({
            filename: nameToHtmlFilenameMapping[name],
            template: htmlPath,
            chunks: [entryName]
          })
        )
      }
    });
  }

  const dist = projectRelative(DIST_NAME);

  config.output = {
    path: dist,
    // filename: '[id].entry.js',
    chunkFilename: () => {
      // const dir = pathData.runtime;
      return `js/[id].chunk.js`;
    },
  };

  config.stats = {
    preset: 'minimal',
    entrypoints: true,
  }

  config.plugins?.push(
    new StatsWriterPlugin({
      filename: 'stats.json',
      stats: {
        preset: 'minimal',
        assets: false,
        entrypoints: true,
      }
    }),
    ...htmls,
  );

  if (fs.existsSync(dist)) rimraf.sync(dist);

  return webpackMerge(config, webpackConfig);
}

export default getWebpackConfig;
