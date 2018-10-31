import { combineReducers, createStore } from 'redux'

// import ui from './ui-reducer'

const ui = (state = {}, action) => state

const reducer = combineReducers({
    ui,
})
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export const { dispatch, getState } = store
export default store
