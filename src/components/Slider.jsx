import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import IndicatorIcon from '@material-ui/icons/Send'
import TextField from '@material-ui/core/TextField'

import Slide from './Slide'

import slideHourSlider from 'actions/slide-hour-slider'

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
        this.startX = 0
    }

    onDrag = (e) => {
        // console.log('on drag')
        if (this.sliding) {
            // console.log('dragging', e.clientX)

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
        // console.log('startX', this.startX)
    }

    stopSliding = () => {
        console.log('STOP sliding')
        this.sliding = false
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
            >
                <Slide />
                <IndicatorIcon className={c.indicator_icon} />
            </div>
        )
    }
}


export default withStyles(styles)(Slider)
