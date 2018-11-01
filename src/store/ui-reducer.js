const initialState = {
    sliderXPosition: 0,
    sliderCenter: 0,
    slideWidth: 0,
    hourWidth: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UI_SET': {
            return { ...state, ...action.ui }
        }
        case 'UI_SET_SLIDER_LEFT': {
            const { sliderXPosition, sliderCenter, slideWidth } = state
            let newPosition = sliderXPosition + action.deltaX

            // left bound restriction with 10 pixel buffer
            if (newPosition > sliderCenter - 10) {
                newPosition = sliderCenter - 10
            }

            // right bound restriction with 10 pixel buffer
            if (newPosition < sliderCenter - slideWidth + 10) {
                newPosition = sliderCenter - slideWidth + 10
            }
            return { ...state, sliderXPosition: newPosition }
        }
        case 'UI_SET_SNAP_SLIDE_TO_HOUR': {
            const { sliderXPosition, sliderCenter, slideWidth, hourWidth } = state
            const hourToSnapTo = Math.floor(((sliderCenter - sliderXPosition) / slideWidth) * 24)
            const newPosition = sliderCenter - (hourToSnapTo * hourWidth + (hourWidth / 2)) - 2
            return { ...state, sliderXPosition: newPosition }
        }
        case 'UI_SET_HOUR_SELECTOR_VALUE': {
            const { sliderCenter, hourWidth } = state
            const newPosition = sliderCenter - (action.value * hourWidth + (hourWidth / 2)) - 2
            return { ...state, sliderXPosition: newPosition }
        }
        default:
            return state;
    }
};
