const initialState = {
    sliderXPosition: 0,
    sliderCenter: 0,
    slideWidth: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UI_SET_SLIDER_LEFT': {
            const { sliderXPosition, sliderCenter, slideWidth } = state
            let newPosition = sliderXPosition + action.deltaX

            // left bound restriction with 10 pixel buffer
            if (newPosition > sliderCenter - 10) {
                newPosition = sliderCenter - 10
            }

            // right bound restriction with 10 pixel buffer
            if (newPosition < sliderCenter - slideWidth + 10) {
                console.log('right bound')
                newPosition = sliderCenter - slideWidth + 10
            }
            return { ...state, sliderXPosition: newPosition }
        }
        case 'UI_SET_SLIDER_CENTER': {
            return { ...state, sliderCenter: action.center }
        }
        case 'UI_SET_SLIDE_WIDTH': {
            return { ...state, slideWidth: action.width }
        }
        default:
            return state;
    }
};
