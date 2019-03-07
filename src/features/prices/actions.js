import api from 'services/apiService'
import { default as types } from './types';


const getAgencies = () =>{
  return (dispatch) => {
    return api.get(`/agencies`)
      .then(res => {
        dispatch(getAgenciesSuccess(res.data))

        const agencyIdInit = res.data[0].id
        dispatch(getCategories(agencyIdInit))
      })
      .catch(err => dispatch(getAgenciesError(err.response)))
  }
}

const getCategories = (agencyId) =>{
  return (dispatch) => {
    return api.get(`/agencies/${agencyId}/categories`)
      .then(res => {
        dispatch(getCategoriesSuccess(agencyId, res.data))

        const categoryIdInit = res.data[0].id
        dispatch(getPrices(agencyId, categoryIdInit))
      })
      .catch(err => dispatch(getCategoriesError(err.response)))
  }
}

const getPrices = (agencyId, categoryId) =>{
  return (dispatch) => {
    return api.get(`/agencies/${agencyId}/categories/${categoryId}/prices`)
      .then(res => { dispatch(getPricesSuccess(categoryId, res.data))})
      .catch(err => dispatch(getPricesError(err.response)))
  }
}


const setPricesFilters = (filters) =>{
  return {
    type: types.SET_PRICES_FILTERS,
    pricesFilters: filters
  }
}

const setPricesOrder = (order) =>{
  return {
    type: types.SORT_PRICES,
    pricesSort: order
  }
}

const getAgenciesSuccess = (data) => {
  return {
    type: types.GET_AGENCIES,
    agencies : data
  }
}


const getCategoriesSuccess = (agencyId, data) => {
  return {
    type: types.GET_CATEGORIES,
    agencyId: agencyId,
    categories : data
  }
}


const getPricesSuccess = (categoryId, data) => {
  return {
    type: types.GET_PRICES,
    categoryId: categoryId,
    prices: data
  }
}


const getAgenciesError = (error) => {
  return {
    type: types.GET_AGENCIES_ERROR,
    error : error
  }
}


const getCategoriesError = (error) => {
  return {
    type: types.GET_CATEGORIES_ERROR,
    error : error
  }
}


const getPricesError = (error) => {
  return {
    type: types.GET_PRICES_ERROR,
    error: error
  }
}


export default {
  getAgencies,
  getCategories,
  getPrices,
  setPricesFilters,
  setPricesOrder
}
