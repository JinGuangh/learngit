import React, { Component } from 'react';

import NavHeader from '@/components/NavHeader';
import SearchBtn from '@/components/SearchBtn';

import './style.scss'
import Slider from './ui/Slider';
import connect from './connect';
import HotCate from './ui/HotCate';

import { Toast } from 'antd-mobile';

//容器组件生产数据，ui组件消费数据
@connect
class Home extends Component {
    componentDidMount() {
        //回退时无需重新加载图片
        // this.props.swiperData.length!=1 && this.props.getHomeSwiperAction()
        Promise.all([
            this.props.getHomeSwiperAction(),
            this.props.getHotCateAction()
        ]).catch(()=>{
            Toast.fail('异常')
        })
    }

    render() {
        return (
            <div>
                {/* 导航 */}
                <NavHeader >菜谱首页</NavHeader>
                {/* 幻灯片菜单 */}
                <Slider data={this.props.swiperData} />
                {/* 搜索按钮 */}
                <SearchBtn borderColor='#f00' onClick={() => this.props.history.push('/search')} />
                {/* 热门分类 */}
                <HotCate data={this.props.hotcate} history={this.props.history}/>
            </div>
        );
    }
}

export default Home;
