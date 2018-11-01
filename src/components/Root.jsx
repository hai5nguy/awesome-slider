import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import withStyles from '@material-ui/core/styles/withStyles'

import TopBar from './TopBar'
import HourSelector from './HourSelector'

const styles = {
    root: {

    },
};

class Root extends React.Component {
    render() {
        const { classes: c, selectedDate, currentHour } = this.props

        return (
            <div className={c.root}>
                <TopBar />
                <HourSelector />
                <div>Date: {selectedDate}</div>
                <div>Selected Hour: {currentHour}</div>
            </div>

        )
    }
}


const mapStateToProps = state => ({
    selectedDate: state.ui.selectedDate,
    currentHour: state.ui.currentHour,
})


export default compose(
    connect(mapStateToProps),
    withStyles(styles),
)(Root)
