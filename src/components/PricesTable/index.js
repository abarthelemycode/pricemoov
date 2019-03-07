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

const styles = theme => ({
  table: {
    border: 1,
    borderStyle: 'solid',
    background: 'grey',
    height: 10
  },
  tablerow: {
    border: 1,
    borderStyle: 'solid',
  },
  tablecell: {
    border: 0,
    padding:0,
    margin:0,
    height: 10,
    'text-align':'center',
    background: 'white',
    '&:first-letter': {
      'text-transform': 'uppercase'
    }
  },
  datecell:{
    color: 'white',
    background:'black',
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

  render() {
    const { classes, t, sortChange } = this.props

    return (
      <div className={ {'overflow': 'scroll'} }>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tablecell} onClick={(e) => sortChange( { type:"startDate", orderby : "ASC" })}>
                <span>{t('startDate')}</span>
              </TableCell>
              <TableCell className={classes.tablecell} onClick={(e) => sortChange( { type:"price", orderby : "ASC" }) } >
                <span>{t('price')}</span>
              </TableCell>
              <TableCell className={classes.tablecell} onClick={(e) => sortChange( { type:"suggestedPrice", orderby : "ASC" }) } >
                <span>{t('suggestedPrice')}</span>
              </TableCell>
              <TableCell className={classes.tablecell} onClick={(e) => sortChange( { type:"isValid", orderby : "DSC" }) } >
                <span>{t('isValid')}</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.table}>
            { this.props.items.map(item =>
                <TableRow className={ classes.tablerow } key={item.id}>
                  <TableCell className={ classes.tablecell+' '+classes.datecell}>{ this.formatDate(item.startDate) }</TableCell>
                  <TableCell className={ classes.tablecell }>{t('price')} : { item.price }€</TableCell>
                  <TableCell className={ classes.tablecell }>{t('suggestedPrice')} : { item.suggestedPrice }€</TableCell>
                  <TableCell className={ classes.tablecell }>{t('isValid')} : { this.formatIsValid(item.isValidated) }</TableCell>
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </div>
    )
  }
}


export default compose(
  withTranslation('common'),
  withStyles(styles)
)(PricesTable);
