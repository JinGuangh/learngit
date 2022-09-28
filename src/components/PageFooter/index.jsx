import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './style.scss'

@withRouter
class PageFooter extends Component {
  render() {
    let pathname = this.props.location.pathname;
    return (
      <>
        {
          this.props.show
            ? (<div className='pagefooter-container'>
              <NavLink exact to='/'>
                <img src={`http://img.1314000.cn/icon/cookbook${pathname === '/' ? '-active' : ''}.png`} alt='' />
                <span>菜谱</span>
              </NavLink>
              <NavLink to='/category'>
                <img src={`http://img.1314000.cn/icon/category${pathname === '/category' ? '-active' : ''}.png`} alt='' />
                <span>分类</span>
              </NavLink>
              <NavLink to='/map'>
                <img src={`http://img.1314000.cn/icon/news${pathname === '/map' ? '-active' : ''}.png `} alt='' />
                <span>地图</span>
              </NavLink>
              <NavLink to='/center'>
                <img src={`http://img.1314000.cn/icon/center${pathname === '/center' ? '-active' : ''}.png`} alt='' />
                <span>个人</span>
              </NavLink>
            </div>)
            :
            null
        }

      </>
    );
  }
}


PageFooter.defaultProps = {
  show: true
}
export default PageFooter;
