import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://sandbox.arabamd.com/api/v1/'

export default new Vuex.Store({
  state: {
    list: [],
    listDetail: {}
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    },
    setListDetail (state, payload) {
      state.listDetail = payload
    }
  },
  actions: {
    getList ({ commit }, data) {
      return axios
        .get('/listing', { params: { ...data.query } })
        .then((res) => {
          commit('setList', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getListDetail ({ commit }, data) {
      return axios
        .get('/detail', { params: { ...data } })
        .then((res) => {
          commit('setListDetail', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})
