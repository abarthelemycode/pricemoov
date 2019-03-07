import { createSelector } from 'reselect'

import { default as filtersSelectors } from './filters'

const getPrices = (state) => state.pricesState.prices
const getPricesFilters = (state) => state.pricesState.pricesFilters
const getPricesSort = (state) => state.pricesState.pricesSort


const filterPrices = (prices, filters) => {

  if(filters.includes(filtersSelectors.SHOW_PRICES_VALIDATED))
    prices = prices.filter(item => item.isValidated === true)

  // we can add other filters for example like get only prices when prices > 50 or whatever
  if(filters.includes(filtersSelectors.SHOW_SUP_50))
    prices = prices.filter(item => item.price > 50)

  return prices
}

const sortPrices = (prices, sort) => {
  let type = sort.type
  prices = prices.sort((a,b) => {
    return (a[type] === b[type] ? 0 : (a[type] < b[type] ? -1 :1));
  })

  if(sort.orderby === "desc")
    prices = prices.reverse()

  return prices
}


const makeGetVisiblePrices = () => {
  return createSelector(
    [ getPricesFilters, getPricesSort, getPrices],
    (pricesFilters, pricesSort, prices) => {
      prices = filterPrices(prices, pricesFilters)
      // ORDER of list prices
      prices = sortPrices(prices, pricesSort)
      return prices
    }
  )
}

export default {
  makeGetVisiblePrices,
  filterPrices,
  sortPrices
}
