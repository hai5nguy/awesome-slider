import { dispatch } from 'store'

export default (deltaX) => {
    dispatch({ type: 'UI_SET_SLIDER_LEFT', deltaX })
}
