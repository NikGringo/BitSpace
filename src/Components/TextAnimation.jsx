import Texty from 'rc-texty';
import React, { Component } from 'react'
import 'rc-texty/assets/index.css';
import TweenOne from 'rc-tween-one';
// import './styleFOR.css';

export default class TextAnimation extends Component {
  state = {
    show: true,
  }
  geInterval = (e) => {
    switch (e.index) {
      case 0:
        return 0;
      case 1:
        return 150;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 150 + 450 + (e.index - 2) * 10;
      default:
        return 150 + 450 + (e.index - 6) * 150;
    }
  }
  getEnter = (e) => {
    const t = {
      opacity: 0,
      scale: 0.8,
      y: '-100%',
    };
    if (e.index >= 2 && e.index <= 6) {
      return { ...t, y: '-30%', duration: 150 };
    }
    return t;
  }

  getSplit = (e) => {
    const t = e.split(' ');
    const c = [];
    t.forEach((str, i) => {
      c.push((
        <span key={`${str}-${i}`}>
          {str}
        </span>
      ));
      if (i < t.length - 1) {
        c.push(<span key={` -${i}`}> </span>);
      }
    });
    return c;
  }

  onClick = () => {
    this.setState({
      show: false,
    }, () => {
      this.setState({
        show: true
      });
    });
  }
  render() {
    return (
      <div className="combined-wrapper">
        {this.state.show && (
          <div className="combined">
            <Texty
              className="title"
              type="mask-top"
              delay={400}
              enter={this.getEnter}
              interval={this.geInterval}
              component={TweenOne}
              componentProps={{
                animation: [
                  { x: 100, type: 'set', duration: 450 },
                  { x: 0, delay: 500, duration: 450 },
                  {
                    ease: 'easeOutQuart',
                    duration: 300,
                    scale: 1,
                    x: 0,
                  },
                  {
                    letterSpacing: 0,
                    delay: -200,
                    scale: 1,
                    ease: 'easeInOutQuint',
                    duration: 1000,
                  },
                ],
              }}
            >
              BitSpace
            </Texty>
          </div>
        )}
      </div>
    );
  }
}