import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { fade } from '@material-ui/core/styles/colorManipulator';

import MailIcon from '@material-ui/icons/Mail';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  aligned: {
    display: 'flex',
    alignItems: 'center'
  },
  grow: {
      flexGrow: 1,
  },
  logo: {
      width: '40px',
      height: '40px'
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: '2px',
    paddingRight: '2px',
    paddingBottom: '2px',
    paddingLeft: '10px',
    width: '100%',
  }
});

export interface Props extends WithStyles<typeof styles> {}

function Header(props: Props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
            <div className={classes.aligned}>
                <HomeIcon/> 
                <Typography>Home</Typography>
                <NotificationsIcon />
                <Typography>Notifications</Typography>
                <MailIcon />
                <Typography>Messages</Typography>
            </div>
            <div className={classes.grow}/>
            <div className={classes.aligned}>
                <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" className={classes.logo}/>
            </div>
            <div className={classes.grow}/>
            <div className={classes.aligned}>
                <div className={classes.search}>
                <div>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                />
                </div>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(Header);