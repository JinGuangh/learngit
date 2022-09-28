import {get} from '@/utils/http'


/**
 * 获取菜谱首页幻灯片数量
 * @return Promise<{id,img,title}>
*/
export const getHomeSwiperApi=()=>get('/api/swiper')