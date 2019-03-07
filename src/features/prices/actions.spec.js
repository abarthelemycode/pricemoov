import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { default as actions } from './actions'
import { default as types } from './types'
import moxios from 'moxios'
import api from "services/apiService"
import { config } from 'config'

import { default as mocks } from './mocks'


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

// SYNC ACTIONS
describe('SYNC feature/prices/actions', () => {
  it('should create an action to sort prices', () => {
    const order = { type: "startDate", orderby:"ASC"}
    const expectedAction = {
      type: types.SORT_PRICES,
      pricesSort : order
    }
    expect(actions.setPricesOrder(order)).toEqual(expectedAction)
  })

  it('should create an action to filters prices', () => {
    const filters = ["SHOW_PRICES_VALIDATED"]
    const expectedAction = {
      type: types.SET_PRICES_FILTERS,
      pricesFilters : filters
    }
    expect(actions.setPricesFilters(filters)).toEqual(expectedAction)
  })
})

// ASYNC ACTIONS FOR AJAX CALLS
describe('ASYNC feature/prices/actions', () => {
  beforeEach(function () {
    moxios.install(api);
  });

  afterEach(function () {
    moxios.uninstall(api);
  });

  it('create GET_AGENCIES_SUCCESS when getAgencies is successful', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mocks.agencies,
      })
    })

    const expectedActions = [
      { type: types.GET_AGENCIES, agencies: mocks.agencies}
    ]
    const store = mockStore({ agencies: [] })
    return store.dispatch(actions.getAgencies()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    })
  })

  it('create GET_CATEGORIES_SUCCESS when getCategories is successful', () => {
    const agencyId = "1"

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mocks.categories,
      })
    })

    const expectedActions = [
      { type: types.GET_CATEGORIES, agencyId: agencyId, categories: mocks.categories}
    ]
    const store = mockStore({ categories: [] })
    return store.dispatch(actions.getCategories(agencyId)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    })
  })

  it('create GET_PRICES_SUCCESS when getPrices is successful', () => {
    const categoryId = "1"
    const agencyId = "1"

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mocks.prices,
      })
    })

    const expectedActions = [
      { type: types.GET_PRICES, categoryId: categoryId, prices: mocks.prices}
    ]
    const store = mockStore({ prices: [] })
    return store.dispatch(actions.getPrices(agencyId, categoryId)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    })
  })
})
