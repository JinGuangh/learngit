import { applyMiddleware, createStore } from 'redux';
//中间件
import thunk from 'redux-thunk';
//调试插件
import { composeWithDevTools } from '@redux-devtools/extension'
//reducer模块化后的总的入口
import reducer from '@/reducer'


export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)