/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Banner3 from './Banner3';
import Nav2 from './Nav2';
import Content13 from './Content13';
import Feature2 from './Feature2';
import Feature1 from './Feature1';
import Content9 from './Content9';
import Content12 from './Content12';
import Footer1 from './Footer1';
import Pricing1 from './Pricing1';

import {
  Banner30DataSource,
  Nav20DataSource,
  Content130DataSource,
  Feature20DataSource,
  Feature10DataSource,
  Feature21DataSource,
  Feature11DataSource,
  Content90DataSource,
  Content120DataSource,
  Pricing10DataSource,
  Footer10DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Banner3
        id="Banner3_0"
        key="Banner3_0"
        dataSource={Banner30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Nav2
        id="Nav2_0"
        key="Nav2_0"
        dataSource={Nav20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="Content13_0"
        key="Content13_0"
        dataSource={Content130DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Feature2_0"
        key="Feature2_0"
        dataSource={Feature20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature1
        id="Feature1_0"
        key="Feature1_0"
        dataSource={Feature10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Feature2_1"
        key="Feature2_1"
        dataSource={Feature21DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature1
        id="Feature1_1"
        key="Feature1_1"
        dataSource={Feature11DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content9
        id="Content9_0"
        key="Content9_0"
        dataSource={Content90DataSource}
        isMobile={this.state.isMobile}
      />,
      // <Content12
      //   id="Content12_0"
      //   key="Content12_0"
      //   dataSource={Content120DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      <Pricing1
        id="Pricing1_0"
        key="Pricing1_0"
        dataSource={Pricing10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {this.state.show && children}
      </div>
    );
  }
}
