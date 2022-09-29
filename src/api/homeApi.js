import { get } from '@/utils/http'
import { Item } from 'antd-mobile/lib/tab-bar';


/**
 * 获取菜谱首页幻灯片数量
 * @return Promise<{id,img,title}>
*/
export const getHomeSwiperApi = async () => {
    let ret = await get('/api/swiper');
   ret.data= ret.data.map(item=>({
    ...item,
    to:`/detail/${item.id}`
   }))
   return ret;
}

//获取热门分类
export const getHotCateApi=()=>get('/api/hotcate')