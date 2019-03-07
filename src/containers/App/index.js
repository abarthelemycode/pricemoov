import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import PricesList from 'containers/PricesList'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 5,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

class App extends Component {

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <PricesList />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(App)
