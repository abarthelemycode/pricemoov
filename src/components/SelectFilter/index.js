import React, { Component } from 'react'
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'


const styles = (theme) => {
  return {
    title: {
      '&:first-letter': {
        'text-transform': 'uppercase'
      }
    }
  }
}

class SelectFilter extends Component {

  render() {
    const { classes } = this.props
    const { name, value, onChange, items } = this.props

    return (
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <h3 className={ classes.title }>{ name }</h3>
        <Select
          value={ value }
          onChange={(e)=>{ onChange(e)} }
        >
          { items.map(item =>
            <MenuItem className={ classes.test } key={item.id} value={item.id}>{item.name + ' - ' + item.code }</MenuItem>)
          }
        </Select>
      </Grid>
    )
  }
}

export default withStyles(styles)(SelectFilter);
