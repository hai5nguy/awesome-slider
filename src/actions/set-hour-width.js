import { dispatch } from 'store'

export default (hourWidth) => {
    dispatch({ type: 'UI_SET', ui: { hourWidth } })
}
