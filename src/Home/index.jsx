/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Banner from './Banner';
import Navigation from './Navigation';
import About from './About';
import Feature2 from './Feature2';
import Feature1 from './Feature1';
import Products from './Products';
import Footer from './Footer';
import Vacancy from './Vacancy';

import {
  BannerData,
  NavigationData,
  AboutData,
  AnalysData,
  AutomatizationData,
  RoboticsData,
  DevelopmentData,
  ProductsData,
  VacancyData,
  FooterData,
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
      <Banner
      id="Banner"
      key="Banner"
      dataSource={BannerData}
      isMobile={this.state.isMobile}
      />,
      <Navigation
      id="Navigation"
      key="Navigation"
      dataSource={NavigationData}
      isMobile={this.state.isMobile}
      />,
      <About
        id="About"
        key="About"
        dataSource={AboutData}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Analys"
        key="Analys"
        dataSource={AnalysData}
        isMobile={this.state.isMobile}
      />,
      <Feature1
        id="Automatization"
        key="Automatization"
        dataSource={AutomatizationData}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Robotics"
        key="Robotics"
        dataSource={RoboticsData}
        isMobile={this.state.isMobile}
      />,
      <Feature1
        id="Development"
        key="Development"
        dataSource={DevelopmentData}
        isMobile={this.state.isMobile}
      />,
      <Products
        id="Products"
        key="Products"
        dataSource={ProductsData}
        isMobile={this.state.isMobile}
      />,
      <Vacancy
        id="Vacancy"
        key="Vacancy"
        dataSource={VacancyData}
        isMobile={this.state.isMobile}
      />,
      <Footer
        id="Footer"
        key="Footer"
        dataSource={FooterData}
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
