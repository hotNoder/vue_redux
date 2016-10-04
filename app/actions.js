import { Actions } from './constants'

export default {
  select(json) {
    return {
      type: Actions.SELECT,
      json
    }
  },

  add(json) {
    return {
      type: Actions.ADD,
      json
    }
  },

  delete(json) {
    return {
      type: Actions.DELETE,
      json
    }
  }
}