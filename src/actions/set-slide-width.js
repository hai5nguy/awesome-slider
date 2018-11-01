import { dispatch } from 'store'

export default (slideWidth) => {
    dispatch({ type: 'UI_SET', ui: { slideWidth } })
}
