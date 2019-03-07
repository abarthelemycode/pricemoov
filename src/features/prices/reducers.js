import { default as types } from "./types";

const initialState = {
  agencyId: '0',
  agencies : [],
  categoryId: 'O',
  categories : [],
  prices : [],
  pricesFilters : [],
  pricesSort: { type: "startDate", orderby:"ASC"},
  error: {}
}

const pricesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_AGENCIES :
      return Object.assign({}, state, {
        agencies: action.agencies,
        agencyId : action.agencies[0].id
      })
    case types.GET_CATEGORIES :
      return Object.assign({}, state, {
        categories: action.categories,
        categoryId : action.categories[0].id,
        agencyId : action.agencyId,
      })
    case types.GET_PRICES :
      return Object.assign({}, state, {
        categoryId :action.categoryId,
        prices: action.prices,
      })
    case types.SET_PRICES_FILTERS :
      return Object.assign({}, state, {
        // reassign an Array in pricesFilters due to limitation of checking Array javascript
        pricesFilters: Object.assign([], action.pricesFilters, action.pricesFilters)
      })
    case types.SORT_PRICES :
      return Object.assign({}, state, {
        pricesSort: Object.assign({}, action.pricesSort, action.pricesSort)
      })

    // ERROR REDUCERS
    case types.GET_AGENCIES_ERROR:
      return Object.assign({}, state, { error: action.error })
    case types.GET_CATEGORIES_ERROR:
      return Object.assign({}, state, { error: action.error })
    case types.GET_PRICES_ERROR:
      return Object.assign({}, state, { error: action.error })

    default:
      return state
  }
}

export default pricesReducer
