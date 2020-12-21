import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropsType from './PropsType';
import Popup from '../popup';
import { getMountContainer } from '../utils/dom';
import ActivityIndicator from '../activity-indicator';

export interface LoadingProps extends PropsType {
  prefixCls?: string;
  className?: string;
}

export default class Loading extends PureComponent<LoadingProps, {}> {
  static defaultProps: LoadingProps = {
    prefixCls: 'mcore-loading',
    mask: true,
  };

  static zarmLoading: HTMLElement | null;

  private static loadingContainer: HTMLElement;

  static hideHelper: () => void;

  static show = (content: LoadingProps) => {
    Loading.unmountNode();
    if (!Loading.zarmLoading) {
      Loading.zarmLoading = document.createElement('div');
      Loading.zarmLoading.classList.add('mcore-loading-container');
      if (content && content.className) {
        Loading.zarmLoading.classList.add(content.className);
      }
      Loading.loadingContainer = content ? getMountContainer(content.mountContainer) : getMountContainer();
      Loading.loadingContainer.appendChild(Loading.zarmLoading);
    }
    if (Loading.zarmLoading) {
      const props = { ...Loading.defaultProps, ...content as LoadingProps, ...{ visible: true, mountContainer: Loading.zarmLoading } };
      ReactDOM.render(
        <Loading {...props} />,
        Loading.zarmLoading,
      );
    }
  };

  static hide = () => {
    if (Loading.zarmLoading) {
      ReactDOM.render(
        <Loading visible={false} />,
        Loading.zarmLoading,
      );
    }
  };

  static unmountNode = () => {
    const { zarmLoading } = Loading;
    if (zarmLoading) {
      ReactDOM.render(<></>, zarmLoading);
      Loading.loadingContainer.removeChild(zarmLoading);
      Loading.zarmLoading = null;
    }
  };

  private timer;

  state = {
    visible: this.props.visible,
  };

  componentDidMount() {
    Loading.hideHelper = this._hide;
    this.autoClose();
  }

  componentDidUpdate(prevProps) {
    const { visible } = this.props;

    if (prevProps.visible !== visible) {
      if (visible === true) {
        // eslint-disable-next-line
        this.setState({
          visible: true,
        });
        this.autoClose();
      } else {
        this._hide();
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  afterClose = () => {
    const { afterClose } = this.props;
    if (Loading.zarmLoading) {
      Loading.loadingContainer.removeChild(Loading.zarmLoading);
      Loading.zarmLoading = null;
    }

    if (typeof afterClose === 'function') {
      afterClose();
    }
  };

  _hide = () => {
    this.setState({
      visible: false,
    });
  };

  autoClose() {
    const { stayTime } = this.props;

    if ((stayTime as number) > 0) {
      this.timer = setTimeout(() => {
        this._hide();
        clearTimeout(this.timer);
      }, stayTime);
    }
  }

  render() {
    const { prefixCls, content, stayTime, className, ...others } = this.props;
    const { visible } = this.state;
    return (
      <Popup
        direction="center"
        maskType="transparent"
        width="70%"
        {...others}
        visible={visible}
        afterClose={this.afterClose}
      >
        <div className={prefixCls}>
          <div className={`${prefixCls}__container`}>{content || <ActivityIndicator type="spinner" size="lg" />}</div>
        </div>
      </Popup>
    );
  }
}