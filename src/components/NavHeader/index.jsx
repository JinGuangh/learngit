import React, { Component } from 'react';
import { string, func, element, oneOfType, bool } from 'prop-types';
import './style.scss'

class NavHeader extends Component {
  render() {
    let title = this.props.children || '导航'
    return (
      <div className='navheader-container'>
        <div className="left" onClick={() => this.props.onLeft()}>
          {this.props.left && this.props.leftText}
        </div>
        {title}
        <div className="right" onClick={() => this.props.onRight()}>
          {this.props.right && this.props.rightText}
        </div>
      </div>)
  }
}

NavHeader.propTypes = {
  leftText: oneOfType([string, element]),
  rightText: oneOfType([string, element]),
  onLeft: func,
  onRight: func,
  left: bool,
  right: bool,
}

NavHeader.defaultProps = {
  leftText: '返回',
  rightText: '搜索',
  left: true,
  right: true,
  onLeft: () => { },
  onRight: () => { },
}


export default NavHeader;
