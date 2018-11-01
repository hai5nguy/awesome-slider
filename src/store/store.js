import { combineReducers, createStore } from 'redux'

import ui from './ui-reducer'

const reducer = combineReducers({
    ui,
})
const store = createStore(
    reducer,
    process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export const { dispatch, getState } = store
export default store
