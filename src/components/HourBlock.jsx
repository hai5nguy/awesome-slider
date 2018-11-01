import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Typography } from '@material-ui/core';

import setHourWidth from 'actions/set-hour-width'

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#ffefbc',
        width: '3.3rem',
        height: '100%',
        '&:last-child > div': {
            borderRight: '1px solid #999',
        },
    },
    marking_box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderLeft: '1px solid #999',
        height: '100%',
        width: '100%',
        margin: '10px 0',
    },
    hour: {
        position: 'absolute',
        top: 0,
        color: '#999',
        userSelect: 'none',
    },
    line: {
        background: '#999',
        height: 1,
        width: '100%',
    },
}

class HourBlock extends React.Component {
    root = React.createRef()

    componentDidMount() {
        const rect = this.root.current.getBoundingClientRect()
        setHourWidth(rect.width)
    }

    click = () => {
        this.props.onHourClick(this.props.hour)
    }

    render() {
        const { classes: c, hour, selected } = this.props

        const style = {
            background: selected && '#c2e2ff',
        }

        return (
            <div className={c.root} ref={this.root} style={style} onClick={this.click}>
                <Typography className={c.hour} variant="subtitle1" align="center">{hour}</Typography>
                <div className={c.marking_box}>
                    <div className={c.line} />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(HourBlock)
