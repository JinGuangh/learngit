import * as types from '@/typings/homeType'
import { fromJS } from 'immutable'

export default {
    [types.HOME_ADD_SWIPER](state, data) {
        return state.set('swiperData', fromJS(data))
    },
    [types.HOME_ADD_HOTCATE](state, data) {
        return state.set('hotcate', fromJS(data))
    }
}