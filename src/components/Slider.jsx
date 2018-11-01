import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import IndicatorIcon from '@material-ui/icons/Send'
import TextField from '@material-ui/core/TextField'

import Slide from './Slide'

import setHourSelectorValue from 'actions/set-hour-selector-value'
import setSliderCenter from 'actions/set-slider-center'
import slideHourSlider from 'actions/slide-hour-slider'
import snapSlideToHour from 'actions/snap-slide-to-hour'


const styles = {
    root: {
        height: 60,
        width: '100%',
        background: '#ccc', // remove
        position: 'relative',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20,
        overflow: 'hidden',
        border: '2px solid #ececec',
        cursor: 'grab',
    },
    indicator_icon: {
        color: '#585852',
        transform: 'rotate(-90deg) scaleY(4)',
        position: 'absolute',
        fontSize: '.7rem',
        bottom: 0,
    },
}

class Slider extends React.Component {
    constructor() {
        super()
        // this.slider = React.createRef()
        this.sliding = false
        this.wasDragging = false
        this.startX = 0
        this.root = React.createRef()
    }

    componentDidMount() {
        const sliderRect = this.root.current.getBoundingClientRect()
        const center = sliderRect.width / 2
        setSliderCenter(center)
    }

    onDrag = (e) => {
        // console.log('on drag')
        if (this.sliding) {
            // console.log('dragging', e.clientX)
            console.log('wasdragging = true')
            this.wasDragging = true
            // this.sliderRect = this.slider.current.getBoundingClientRect()
            // console.log('sliderRect', sliderRect)

            const deltaX = e.clientX - this.startX
            this.startX = e.clientX
            slideHourSlider(deltaX)
        }
    }

    startSliding = (e) => {
        console.log('start sliding')
        this.sliding = true
        this.startX = e.clientX
        // e.stopImmediatePropagation()
    }

    stopSliding = (e) => {
        console.log('STOP sliding')
        e.stopPropagation()
        this.sliding = false
        // this.wasDragging = false

        snapSlideToHour()
    }

    hourClick = (hour) => {
        console.log('hourClick wasDragging', this.wasDragging)
        if (this.wasDragging) {
            this.wasDragging = false
            return
        }

        console.log('do click')
        setHourSelectorValue(hour)
    }

    render() {
        const { classes: c } = this.props

        return (
            <div
                className={c.root}
                onMouseMove={this.onDrag}
                onMouseDown={this.startSliding}
                onMouseUp={this.stopSliding}
                onMouseLeave={this.stopSliding}
                ref={this.root}
            >
                <Slide onHourClick={this.hourClick} />
                <IndicatorIcon className={c.indicator_icon} />
            </div>
        )
    }
}


export default withStyles(styles)(Slider)
