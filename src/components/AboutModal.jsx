import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'

const styles = {
    dialogBody: {
        padding: 24,
    },
}

class AboutModel extends React.Component {
    handleClose = () => {
        this.props.onClose()
    }

    handleListItemClick = (value) => {
        this.props.onClose(value)
    }

    render() {
        const { classes: c, onClose, selectedValue, ...other } = this.props

        return (
            <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
                <DialogTitle id="simple-dialog-title" align="center">Awesome Slider</DialogTitle>
                <div className={c.dialogBody}>
                    <Typography component="p" align="center">
                        Made by Hai Nagooyen
                        <br />
                        <br />
                        @Copyright 2018
                    </Typography>
                </div>
            </Dialog>
        )
    }
}

export default withStyles(styles)(AboutModel)
