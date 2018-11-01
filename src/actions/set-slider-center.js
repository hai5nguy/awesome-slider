import { dispatch } from 'store'

export default (center) => {
    dispatch({ type: 'UI_SET_SLIDER_CENTER', center })
}
