import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
// import TextField from '@material-ui/core/TextField'
import DatePicker from './DatePicker';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid blue',
        margin: 20,
        padding: 20,
    },
}

class HourSelector extends React.Component {
    render() {
        const { classes: c } = this.props

        return (
            <div className={c.root}>
                <DatePicker />
            </div>
        )
    }
}


export default withStyles(styles)(HourSelector)
