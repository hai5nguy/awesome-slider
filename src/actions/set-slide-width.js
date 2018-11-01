import { dispatch } from 'store'

export default (width) => {
    dispatch({ type: 'UI_SET_SLIDE_WIDTH', width })
}
