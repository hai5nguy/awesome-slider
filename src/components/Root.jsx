import React from 'react'
// import { compose } from 'redux'
// import { connect } from 'react-redux'
import withStyles from '@material-ui/core/styles/withStyles'

import TopBar from './TopBar'

const styles = {
    root: {

    },
};

class Root extends React.Component {
    render() {
        const { classes: c } = this.props

        return (
            <div className={c.root}>
                <TopBar />
                yo
            </div>

        )
    }
}

export default withStyles(styles)(Root)
