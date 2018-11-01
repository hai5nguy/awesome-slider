import { dispatch } from 'store'

export default (sliderCenter) => {
    dispatch({ type: 'UI_SET', ui: { sliderCenter } })
}
