import { fromJS } from "immutable";
import mutations from '@/mutations/homeMutation';
import * as types from '@/typings/homeType'
//初始化数据
const initState = fromJS({
    swiperData: [{ id: 0, img: '', title: '默认' }],
    hotcate:[]
})


export default (state = initState, { type, payload }) => mutations[type] ? mutations[type](state, payload) : state