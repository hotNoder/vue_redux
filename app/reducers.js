import { Actions } from './constants'
import { combineReducers } from 'redux'


function _combineReducers(initState={}, reduce) {
  return (state=initState, action) => reduce[action.type] && reduce[action.type](state, action) || state
}

const listInitState = {
  slugId: 1,
  list: [{
    name: 0
  }]
}
const list = _combineReducers(listInitState, {
  [Actions.ADD]: (state, action) => {
    state.list.push({
      name: state.slugId++
    })
    return state
  },
  [Actions.DELETE]: (state, action) => {
    state.list.splice(action.json.index, 1)
    return state
  }
})

const projectInitState = {
  selectId: 0
}
const project = _combineReducers(projectInitState, {
  [Actions.DELETE]: (state, action) => {
    state.selectId = 0
    return state
  },
  [Actions.SELECT]: (state, action) => {
    state.selectId = action.json.selectId
    return state
  }
})


const reducers = combineReducers({
  list,
  project
})

export default reducers