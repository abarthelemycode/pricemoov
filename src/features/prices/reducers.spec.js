import { default as reducer } from './reducers'
import { default as types } from './types'
import { default as filters } from './filters'
import { default as mocks } from './mocks'

const initialState = {
  agencyId: '0',
  agencies : [],
  categoryId: 'O',
  categories : [],
  prices : [],
  pricesFilters : [],
  pricesSort: { type: "startDate", orderby:"asc"},
  error: {}
}

describe('features/prices/reducers', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle GET_AGENCIES', () => {
    expect(reducer([], { type: types.GET_AGENCIES, agencies : mocks.agencies }))
          .toEqual({ agencies : mocks.agencies , agencyId: mocks.agencies[0].id})
  })

  it('should handle GET_CATEGORIES', () => {
    const agencyId = "1"
    expect(reducer([], { type: types.GET_CATEGORIES, categories : mocks.categories, agencyId: agencyId }))
          .toEqual({
            categories : mocks.categories ,
            categoryId: mocks.categories[0].id,
            agencyId: agencyId
          })
  })

  it('should handle GET_PRICES', () => {
    const categoryId = "1"
    expect(reducer([], { type: types.GET_PRICES, prices : mocks.prices, categoryId: categoryId }))
          .toEqual({
            prices : mocks.prices,
            categoryId: categoryId
          })
  })

  it('should handle SORT_PRICES', () => {
    const pricesSort = { type:"startDate", orderby: "ASC" }
    expect(reducer([], { type: types.SORT_PRICES, pricesSort : pricesSort}))
          .toEqual({
            pricesSort : pricesSort
          })
  })

  it('should handle SET_PRICES_FILTERS', () => {
    const pricesFilters = [ filters.SHOW_PRICES_VALIDATED ]
    expect(reducer([], { type: types.SET_PRICES_FILTERS, pricesFilters : pricesFilters}))
          .toEqual({
            pricesFilters : pricesFilters
          })
  })

  it('should handle GET_PRICES_ERROR', () => {
    const error = { response:{}, code: "404"}
    expect(reducer([], { type: types.GET_PRICES_ERROR, error : error}))
          .toEqual({
            error : error
          })
  })

  it('should handle GET_AGENCIES_ERROR', () => {
    const error = { response:{}, code: "404"}
    expect(reducer([], { type: types.GET_AGENCIES_ERROR, error : error}))
          .toEqual({
            error : error
          })
  })
  it('should handle GET_CATEGORIES_ERROR', () => {
    const error = { response:{}, code: "404"}
    expect(reducer([], { type: types.GET_CATEGORIES_ERROR, error : error}))
          .toEqual({
            error : error
          })
  })


})
