import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  text: {
    '&:first-letter': {
      'text-transform': 'uppercase'
    }
  },
  iOSSwitchBase: {
    '&$iOSChecked': {
      color: theme.palette.common.white,
      '& + $iOSBar': {
        backgroundColor: theme.palette.secondary.main,
      },
    },
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp,
    }),
  },
  iOSChecked: {
    transform: 'translateX(15px)',
    '& + $iOSBar': {
      opacity: 1,
      border: 'none',
    },
  },
  iOSBar: {
    borderRadius: 10,
    width: 38,
    height: 20,
    marginLeft: -19,
    marginTop: -10,
    border: 'solid 1px',
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.primary.second,
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  iOSIcon: {
    width: 18,
    height: 18,
  },
  iOSIconChecked: {
    boxShadow: theme.shadows[1],
  },
})

class Toggle extends Component {
  state = {
    checked: false,
  }

  handleChange = e => {
   this.setState({ checked : e.target.checked })
   this.props.onChange()
  }

  render() {
    const { classes } = this.props
    const { text, align } = this.props

    return (
      <Grid
        container
        direction="row"
        alignItems="center"
        justify={ align }>
        <Switch
          classes={{
            switchBase: classes.iOSSwitchBase,
            bar: classes.iOSBar,
            icon: classes.iOSIcon,
            iconChecked: classes.iOSIconChecked,
            checked: classes.iOSChecked,
          }}
          checked={ this.state.checked}
          onChange={(e) => { this.handleChange(e)} }
          value="checked"
        />
        <span className={ classes.text }>{ text }</span>
      </Grid>
    )
  }
}

export default withStyles(styles)(Toggle)
