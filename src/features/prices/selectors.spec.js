import { createSelector } from 'reselect'

import { default as filtersSelectors } from './filters'
import { default as selectors } from './selectors'
import { default as mocks } from './mocks'

describe('features/prices/selectors', () => {
  const filters = [ filtersSelectors.SHOW_PRICES_VALIDATED ]
  const sorting = { type: "startDate", orderby: "ASC"}

  it('filterPrices', () => {
    const selected = selectors.filterPrices(mocks.prices, filters)
    expect(Array.isArray(selected)).toBe(true)
  })

  it('sortPrices', () => {
    const selected = selectors.sortPrices(mocks.prices, sorting)
    expect(Array.isArray(selected)).toBe(true)
  })

  it('makeGetVisiblePrices', () => {
    const selected = selectors.makeGetVisiblePrices().resultFunc(filters, sorting, mocks.prices)
    expect(Array.isArray(selected)).toBe(true)
  })
})
