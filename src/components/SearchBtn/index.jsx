//封装的组件
import React, { Component } from 'react';
import { string, func, element, oneOfType } from 'prop-types';
// import './style.scss'

import { SearchBtnContainer } from "./style";
class SearchBtn extends Component {
    render() {
        return (<SearchBtnContainer borderColor={this.props.borderColor} onClick={this.props.onClick}>
            <img src="http://img.1314000.cn/icon/search.png" alt="" />
            <span>{this.props.title}</span>
        </SearchBtnContainer>)
    }
}


SearchBtn.propsTypes = {
    onClick: func,
    title:oneOfType([string,element]),
    borderColor:string,
}
SearchBtn.defaultProps = {
    onClick: () => { },
    title:'搜索你要找的菜',
    borderColor:'#ff6c0c'
}

export default SearchBtn;
