type BuildType = 'mpa' | 'spa' | 'cloud'
type CSSType = 'style' | 'link'
type PageItem = {
  html: string,
  src: string,
  boot: string,
  children?: {
    [pathname: string]: PageItem
  },
} | string

interface Cli {
  type: BuildType,
  css: CSSType,
  publicPath: string,
  port: string,
  host: string,
}


interface XCloudConfig {
  boot?: string,
  html?: string,
  src?: {
    [name: string]: string
  },
  pages: {
    [pathname: string]: PageItem
  },
  components?: {
    export?: string[] | {
      [name: string]: string
    },
    import?: {
      [name: string]: string
    }
  }
}

type PageDetail = {
  name?: string,
  pathname?: string,
  src?: string,
  html?: string,
  boot?: string,
};
type Page = string | PageDetail;
type PageConfig = {
  entry: string,
  entryName: string,
  filename: string,
  htmlFilename: string,
} & PageDetail;

interface PkgConfig {
  name: string,
  version: string,
  dependencies: {
    [pkgName: string]: string
  },
  path: string,
}

export {
  XCloudConfig,
  Cli,
  PkgConfig,
  BuildType,
  PageDetail,
  PageConfig,
  PageItem,
}