const initialState = {
    sliderXPosition: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UI_SET_SLIDER_LEFT': {
            const { sliderXPosition } = state
            return { ...state, sliderXPosition: sliderXPosition + action.deltaX }
        }
        default:
            return state;
    }
};
