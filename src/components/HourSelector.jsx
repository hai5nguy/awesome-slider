import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import DatePicker from './DatePicker';
import Slider from './Slider';

import setHourSelectorValue from 'actions/set-hour-selector-value'

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #e9e9ea',
        borderRadius: 4,
        margin: 20,
        padding: 20,
    },
}

class HourSelector extends React.Component {
    componentDidMount() {
        setHourSelectorValue(this.props.initialValue || 12)
    }

    render() {
        const { classes: c } = this.props

        return (
            <div className={c.root}>
                <DatePicker />
                <Slider />
            </div>
        )
    }
}


export default withStyles(styles)(HourSelector)
