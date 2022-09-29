import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import { Link } from 'react-router-dom'

class Slider extends Component {
  render() {
    return (
      <>
        <Carousel infinite style={{ height: 176 }}>
          {this.props.data.map(({ id, img, title, to = '' }) => (
            <Link
              className="home-slider-item"
              key={id}
              // to={`/detail/${id}`}
              to={to}
              style={{ display: 'inline-block', width: '100%', height: 176 }}
            >
              <img src={img} alt="" style={{ width: '100%', verticalAlign: 'top' }} />
              <div>{title}</div>
            </Link>
          ))}
        </Carousel>
      </>
    )
  }
}

export default Slider
