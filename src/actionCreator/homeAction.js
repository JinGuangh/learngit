import { getHomeSwiperApi, getHotCateApi } from '@/api/homeApi'
import * as types from '@/typings/homeType'
import store from '@/store'
/** 
 * 
 * 获取幻灯片图片action，用到了异步，使用thunk
*/
export const getHomeSwiperAction = () => async (dispatch, getState) => {
    //回退时无需重新加载图片
    if (getState().getIn(['home', 'swiperData']).size === 1) {
        const ret = await getHomeSwiperApi()
        dispatch({ type: types.HOME_ADD_SWIPER, payload: ret.data })
    }
}
//热门分类
export const getHotCateAction = () => async (dispatch, getState) => {
    //回退时无需重新加载图片
    if (getState().getIn(['home', 'hotcate']).size === 0) {
        const ret = await getHotCateApi()
        dispatch({ type: types.HOME_ADD_HOTCATE, payload: ret.data })
    }
}

