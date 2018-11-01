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
        this.sliding = false
        this.wasDragging = false
        this.startX = 0
        this.root = React.createRef()
    }

    setSliderCenter = () => {
        const sliderRect = this.root.current.getBoundingClientRect()
        const center = sliderRect.width / 2
        setSliderCenter(center)
    }

    componentDidMount() {
        this.setSliderCenter()
        window.addEventListener('resize', this.setSliderCenter);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setSliderCenter);
    }

    onDrag = (e) => {
        if (this.sliding) {
            let clientX
            if (e.touches && e.touches.length === 1) {
                clientX = e.touches[0].clientX
            } else {
                clientX = e.clientX
            }
            const deltaX = clientX - this.startX
            this.startX = clientX
            if (Math.abs(deltaX) > 5) {
                this.wasDragging = true
            }
            slideHourSlider(deltaX)
        }
    }


    startSliding = (e) => {
        this.sliding = true

        if (e.touches && e.touches.length === 1) {
            this.startX = e.touches[0].clientX
        } else {
            this.startX = e.clientX
        }
    }

    stopSliding = (e) => {
        this.sliding = false
        snapSlideToHour()
    }

    hourClick = (hour) => {
        if (this.wasDragging) {
            this.wasDragging = false
            return
        }
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
                onTouchStart={this.startSliding}
                onTouchEnd={this.stopSliding}
                onTouchMove={this.onDrag}

                ref={this.root}
            >
                <Slide onHourClick={this.hourClick} />
                <IndicatorIcon className={c.indicator_icon} />
            </div>
        )
    }
}


export default withStyles(styles)(Slider)
