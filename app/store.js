import * as redux from 'redux'
import Actions from './actions'
import Reducers from './reducers'

var store = redux.createStore(Reducers, {})

export default {
  // ...store,
  subscribe: store.subscribe,
  getState: store.getState,
  actions: redux.bindActionCreators(Actions, store.dispatch),
}
