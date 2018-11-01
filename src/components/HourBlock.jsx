import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Typography } from '@material-ui/core';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'relative',
        // height: 60,
        // width: '100%',
        background: '#ffefbc',
        width: '3.3rem',
        height: '100%',
        // border: '2px solid green',
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
    render() {
        const { classes: c, hour } = this.props

        return (
            <div className={c.root}>
                <Typography className={c.hour} variant="subtitle1" align="center">{hour}</Typography>
                <div className={c.marking_box}>
                    <div className={c.line} />
                </div>
            </div>
        )
    }
}


export default withStyles(styles)(HourBlock)
