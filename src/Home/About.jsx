import React from "react";
// import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
// import QueueAnim from 'rc-queue-anim';
import { getChildrenToRender } from "./utils";
import { Parallax } from "rc-scroll-anim";

class Content13 extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    return (
      <div {...props} {...dataSource.OverPack}>
        <div
          type="scale"
          leaveReverse // eslint-disable-line no-use-before-define
          key="page"
          delay={[0, 1]} // eslint-disable-line no-use-before-define
          {...dataSource.titleWrapper}
        >
          {dataSource.titleWrapper.children.map(getChildrenToRender)}
        </div>
      </div>
    );
  }
}

export default Content13;
