import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import withStyles from '@material-ui/core/styles/withStyles'
import IndicatorIcon from '@material-ui/icons/Send'
import TextField from '@material-ui/core/TextField'

import HourBlock from './HourBlock'
import setSlideWidth from 'actions/set-slide-width'

const styles = {
    root: {
        // height: 60,
        // width: '100%',
        background: '#aaa',
        position: 'absolute',
        top: 0,
        bottom: 0,
        // alignItems: 'center',
        display: 'flex',
        // flexDirection: 'column',

    },
}

class Slide extends React.Component {
    root = React.createRef()

    componentDidMount() {
        const rect = this.root.current.getBoundingClientRect()
        setSlideWidth(rect.width)
    }

    render() {
        const { classes: c, sliderXPosition } = this.props

        const hours = new Array(24).fill(0)

        const style = { left: sliderXPosition }

        return (
            <div className={c.root} style={style} onMouseDown={this.mouseDown} ref={this.root}>
                { hours.map((h, i) => <HourBlock key={i} hour={i} />)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    sliderXPosition: state.ui.sliderXPosition,
})


export default compose(
    connect(mapStateToProps),
    withStyles(styles),
)(Slide)
