import React, { Component } from 'react'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import { withTranslation } from 'react-i18next'

import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'

const styles = theme => ({
  tablerow:{
    border: 1,
    borderStyle:"solid",
  },
  tablecell: {
    padding:0,
    margin:0,
    'text-align':'center',
  },
  firstletter: {
    '&:first-letter': {
      'text-transform': 'uppercase'
    }
  },
  datecell:{
    color: theme.palette.primary.main,
    background: theme.palette.secondary.second,
  },
})

class PricesTable extends Component {

  formatDate(unixDate){
    let date = new Date(unixDate * 1000)
    return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
  }

  formatIsValid(bool){
    return (bool === true)? "Y" : "N"
  }


  sortHandler(id){
    const pricesSort = this.props.pricesSort
    let orderby = (pricesSort.orderby === "asc")? "desc" : "asc"
    if(pricesSort.type !== id){
      orderby = "asc"
    }
    this.props.sortChange( { type:id, orderby : orderby })
  }

  setDirection(numeric, orderby){
    if(numeric === true)
      orderby = (orderby === "asc")? "desc" : "asc"

    return orderby
  }

  render() {
    const { classes, t, pricesSort } = this.props

    const rows = [
      { id: 'startDate', numeric:false },
      { id: 'price', numeric:true },
      { id: 'suggestedPrice', numeric:true },
      { id: 'isValided', numeric:false }
    ]

    return (
      <Grid>
        <Table>
          <TableHead>
            <TableRow className={classes.tablerow}>
            { rows.map(row =>
              <TableCell key={row.id}
                className={ classes.tablecell}
                align="right"
                sortDirection={ pricesSort.type === row.id ? pricesSort.orderby  : false}
                onClick={(e) => this.sortHandler(row.id)}
                >
                <TableSortLabel
                  active={pricesSort.type === row.id}
                  direction={ this.setDirection(row.numeric, pricesSort.orderby)}
                ><span className={classes.firstletter}>{t(row.id)}</span></TableSortLabel>
              </TableCell>
              )
            }
            </TableRow>
          </TableHead>
          <TableBody className={classes.table}>
            { this.props.items.map(item =>
                <TableRow key={item.id}>
                  <TableCell className={ classes.tablecell+' '+classes.datecell}>{ this.formatDate(item.startDate) }</TableCell>
                  <TableCell className={ classes.tablecell+' '+classes.firstletter }>{t('price')} : { item.price }€</TableCell>
                  <TableCell className={ classes.tablecell+' '+classes.firstletter }>{t('suggestedPrice')} : { item.suggestedPrice }€</TableCell>
                  <TableCell className={ classes.tablecell+' '+classes.firstletter }>{t('isValided')} : { this.formatIsValid(item.isValidated) }</TableCell>
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </Grid>
    )
  }
}


export default compose(
  withTranslation('common'),
  withStyles(styles)
)(PricesTable);
