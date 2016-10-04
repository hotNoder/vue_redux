import Store from './store'

export default {
  data() {
    return {
      state: null,
      actions: null
    }
  },
  methods: {
    updateState() {
      this.state = Store.getState()
    }
  },
  created() {
    this.unSubscribe = Store.subscribe(this.updateState.bind(this))
    this.actions = Store.actions
    
    // once createStore, an INIT action would be called internally so that now we get an initialState
    this.state = Store.getState()
  },
  beforeDestroy() {
    this.unSubscribe()
  }
}