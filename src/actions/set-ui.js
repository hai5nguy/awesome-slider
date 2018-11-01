import { dispatch } from 'store'

export default (ui) => {
    dispatch({ type: 'UI_SET', ui })
}
