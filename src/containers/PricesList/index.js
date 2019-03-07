import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withTranslation } from 'react-i18next';

import Grid from '@material-ui/core/Grid'

import { pricesActions } from 'features/prices'
import { pricesSelectors } from 'features/prices'
import { pricesFilters } from 'features/prices'
import { SelectFilter, PricesTable, Toggle } from 'components'


class PricesList extends Component {


  componentDidMount() {
    this.props.getAgencies()
  }

  selectAgencyHandler(e) {
    this.props.getCategories(e.target.value)
  }

  selectCategoryHandler(e) {
    this.props.getPrices(this.props.agencyId, e.target.value)
  }

  sortPrices(sort){
    this.props.setPricesOrder(sort)
  }

  toggleHandler() {
    this.toggleFilters(pricesFilters.SHOW_PRICES_VALIDATED)
  }

  // using if we want to add others filters in future
  toggleFilters(filting){
    let filters = this.props.pricesFilters
    if(filters.includes(filting))
      filters = filters.filter(f => f !== filting)
    else
      filters.push(filting)

    this.props.setPricesFilters(filters)
  }

  // toggle handler for testing internationnalization (to deleting)
  toogleHandlerLanguage (e) {
    const i18n = this.props.i18n
    const lang = (i18n.language === 'fr')? 'en' : 'fr'
    i18n.changeLanguage(lang)
  }

  render() {
    const { t, i18n } = this.props
    const { prices, agencies, agencyId, categories, categoryId, pricesSort } = this.props

    return (
        <Grid>
          <Toggle align="flex-end" text={t('changeLanguage') + " : " + i18n.language } onChange={(e)=> this.toogleHandlerLanguage(e) }/>
          <SelectFilter  name={t('agencies')} items={agencies} value={agencyId}
            onChange={ (e)=> this.selectAgencyHandler(e) } />
          <SelectFilter  name={t('categories')} items={categories} value={categoryId}
            onChange={ (e)=> this.selectCategoryHandler(e) } />
          <PricesTable sortChange={(e) => this.sortPrices(e)} pricesSort={ pricesSort } items={prices}/>
          <Toggle align="flex-start" text={t('displayPrices')} onChange={(e)=> this.toggleHandler(e) }/>
        </Grid>
    );
  }
}


const makeMapStateToProps = () => {
  //prices filters
  const getVisiblePrices = pricesSelectors.makeGetVisiblePrices()

  const mapStateToProps = (state, props) => {

    return {
      agencyId: state.pricesState.agencyId,
      categoryId: state.pricesState.categoryId,
      agencies : state.pricesState.agencies,
      categories: state.pricesState.categories,
      prices:  getVisiblePrices(state),
      pricesFilters : state.pricesState.pricesFilters,
      pricesSort : state.pricesState.pricesSort,
      payload: state.pricesState.payload
    }
  }
  return mapStateToProps
}

const mapDispatchToProps = (dispatch) => {
  return {
      getAgencies: () => { dispatch(pricesActions.getAgencies()) },
      getCategories: (agencyId) => { dispatch(pricesActions.getCategories(agencyId)) },
      getPrices: (agencyId, categoryId) => { dispatch(pricesActions.getPrices(agencyId, categoryId)) },
      setPricesFilters: (filters) => {dispatch(pricesActions.setPricesFilters(filters))},
      setPricesOrder: (sort) => {dispatch(pricesActions.setPricesOrder(sort))}
  }
}

export default compose(
  connect(makeMapStateToProps, mapDispatchToProps),
  withTranslation('common')
)(PricesList)
