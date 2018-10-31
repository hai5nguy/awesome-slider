import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import HelpIcon from '@material-ui/icons/Help'
import MenuIcon from '@material-ui/icons/Menu'

import AboutModal from './AboutModal'

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    headerText: {
        flexGrow: 1,
        userSelect: 'none',
        fontSize: '30px',
    },
    balance_chip: {
        fontSize: '1.1rem',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    menu_icon: {
        fontSize: '2rem',
    },
};

class TopBar extends React.Component {
    state = {
        left: false,
        aboutOpen: false,
    }

    showAbout = aboutOpen => () => {
        this.setState({ aboutOpen })
    }

    toggleDrawer = open => () => {
        this.setState({
            left: open,
        })
    }

    render() {
        const { classes: c } = this.props
        const { aboutOpen } = this.state

        return (
            <div className={c.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={c.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
                            <MenuIcon className={c.menu_icon} />
                        </IconButton>

                        <SwipeableDrawer open={this.state.left} onClose={this.toggleDrawer(false)} onOpen={this.toggleDrawer(true)}>
                            <div tabIndex={0} role="button" onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)}>
                                <List component="nav">
                                    <ListItem button onClick={this.showAbout(true)}>
                                        <ListItemIcon>
                                            <HelpIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="About" />
                                    </ListItem>
                                </List>
                            </div>
                        </SwipeableDrawer>
                        <Typography variant="h6" color="inherit" className={c.headerText}>Awesome Slider</Typography>
                        <AboutModal open={aboutOpen} onClose={this.showAbout(false)} />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
} export default withStyles(styles)(TopBar)
