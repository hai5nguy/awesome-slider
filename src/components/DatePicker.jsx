import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'

const styles = {
    textField: {
        width: 165,
    },
    input: {
        '&::-webkit-calendar-picker-indicator': {
            color: 'rgba(0, 0, 0, 0)',
            opacity: 1,
            display: 'block',
            background: 'center / contain no-repeat url(calendar_icon.png)',
            width: 16,
            height: 22,
            borderWidth: 'thin',
            cursor: 'pointer',
        },
    },
}

class DatePicker extends React.Component {
    render() {
        const { classes: c } = this.props

        const startDate = '2018-06-01'
        const endDate = '2018-08-31'

        return (
            <TextField
                label="Date"
                type="date"
                className={c.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    classes: {
                        input: c.input,
                    },
                    inputProps: {
                        min: startDate,
                        max: endDate,
                    },
                }}
            />
        )
    }
}


export default withStyles(styles)(DatePicker)
