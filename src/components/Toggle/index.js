import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  text: {
    '&:first-letter': {
      'text-transform': 'uppercase'
    }
  }
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
