import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'

const reducer = (state = {}, action) => {
  return state
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)
export default store