import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import withStyles from '@material-ui/core/styles/withStyles'
import IndicatorIcon from '@material-ui/icons/Send'
import TextField from '@material-ui/core/TextField'

import HourBlock from './HourBlock'
import setSlideWidth from 'actions/set-slide-width'
import setUi from 'actions/set-ui'

const styles = {
    root: {
        background: '#aaa',
        position: 'absolute',
        top: 0,
        bottom: 0,
        display: 'flex',
    },
}

class Slide extends React.Component {
    root = React.createRef()

    setSlideWidth = () => {
        const rect = this.root.current.getBoundingClientRect()
        setSlideWidth(rect.width)
    }

    componentDidMount() {
        this.setSlideWidth()
        window.addEventListener('resize', this.setSlideWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setSlideWidth);
    }


    componentDidUpdate() {
        const { transitioning, sliderXPosition } = this.props
        if (transitioning) {
            this.root.current.style.left = `${sliderXPosition}px`
            setTimeout(() => {
                setUi({ transitioning: false })
            }, 200)
        }
    }

    render() {
        const { classes: c, sliderXPosition, oldXPosition, currentHour, transitioning, onHourClick } = this.props

        const hours = new Array(24).fill(0)

        const style = {}
        if (transitioning) {
            style.transition = 'left 200ms ease-in-out 0s'
            style.left = oldXPosition
        } else {
            style.left = sliderXPosition
        }

        return (
            <div className={c.root} style={style} onMouseDown={this.mouseDown} ref={this.root}>
                { hours.map((h, i) => <HourBlock key={i} hour={i} selected={currentHour === i} onHourClick={onHourClick} />)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    sliderXPosition: state.ui.sliderXPosition,
    currentHour: state.ui.currentHour,
    transitioning: state.ui.transitioning,
    oldXPosition: state.ui.oldXPosition,
})


export default compose(
    connect(mapStateToProps),
    withStyles(styles),
)(Slide)
