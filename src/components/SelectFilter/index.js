import React, { Component } from 'react'
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
    title: {
      color: theme.palette.secondary.main,
      '&:first-letter': {
        'text-transform': 'uppercase'
      }
    },
    select:{
      'text-align': "left",
      width: "12em",
      height: "2.5em"
    }
})

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
          className={classes.select }
          value={ value }
          onChange={(e)=>{ onChange(e)} }
          input={<OutlinedInput labelWidth={0} value={''}/>}
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
