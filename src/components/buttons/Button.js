import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import PersistentDrawerLeft from '../dataDisplay/table'
const styles = theme => ({
  typography: {
    padding: theme.spacing(2),
    width:900,
    height:900

  },
});

class NoTransitionPopper extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: state.anchorEl ? null : currentTarget,
    }));
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const id = open ? 'no-transition-popper' : null;

    return (
      <div>
        <Button aria-describedby={id} variant="contained" onClick={this.handleClick}>
          ترتيب البريمير ليج
        </Button>
        <Popper id={id} open={open} anchorEl={anchorEl}className={classes.typography}>
           <PersistentDrawerLeft />
        </Popper>
      </div>
    );
  }
}

NoTransitionPopper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoTransitionPopper);