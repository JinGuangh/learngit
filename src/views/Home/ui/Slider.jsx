import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
import { Link } from 'react-router-dom'


class Slider extends Component {
  render() {
    return (
      <>
        <Carousel
          autoplay={true}
          infinite
        >
          {this.props.data.map((val, index) => (
            <Link className='home-slider-item'
              key={val}
              to={`/detail/${index}`}
              style={{ display: 'inline-block', width: '100%', height: '176' }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
              />
              <div>家常豆腐</div>
            </Link>
          ))}
        </Carousel>
      </>
    );
  }
}

export default Slider;
