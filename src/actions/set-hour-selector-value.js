import { dispatch } from 'store'

export default (value) => {
    dispatch({ type: 'UI_SET_HOUR_SELECTOR_VALUE', value })
}
