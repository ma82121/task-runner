import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    stage: 1,
    menu: {
      display: false,
      id: 1
    },
    todos: [
      { id: 1, label: '免許更新', text: '...', done: true },
      { id: 2, label: '参考書買う', text: '...', done: false },
      { id: 3, label: '飛行機予約', text: '...', done: false },
      { id: 4, label: '美容院予約', text: '...', done: true }
    ]
  },
  mutations: {
    setMenuDisplay(state, payload) {
      state.menu.display = payload.display
    },
    setMenuId(state, payload) {
      state.menu.id = payload.id
    },
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    setStage(state, payload) {
      state.stage = payload.stage
    }
  },
  actions: {},
  getters: {
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id)
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})
