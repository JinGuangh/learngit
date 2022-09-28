import NavHeader from '@/components/NavHeader';
import React, { Component } from 'react';
import Slider from './ui/Slider';
import './style.scss'

import { getHomeSwiperApi } from '@/api/homeApi'
//容器组件生产数据，ui组件消费数据
class Home extends Component {
    state = {
        //幻灯片数据源
        swiperData: [],
        
    }
    async componentDidMount() {
        let ret = await getHomeSwiperApi()
    }

    render() {
        return (
            <div>
                {/* 导航 */}
                <NavHeader >菜谱首页</NavHeader>
                {/* 幻灯片菜单 */}
                <Slider data={this.state.swiperData} />
            </div>
        );
    }
}

export default Home;
