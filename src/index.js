import React from 'react'
import ReactDOM from 'react-dom'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
import Amber from '@material-ui/core/colors/amber'
import Cyan from '@material-ui/core/colors/cyan'

import Root from 'components/Root'

import store from 'store'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: Amber[300]
        },
        secondary: {
            main: Cyan[400],
        },
    },
})

const App = () => (
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Root />
    </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('app'));
