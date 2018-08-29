import Vue from 'vue'
const state = {
  posts: [],
  currentPost: null
}

const getters = {
  getTotalPosts: (state) => () => {
    return state.posts.length
  }
}

const mutations = {
  setPosts: (state, payload) => {
    state.posts = payload
  },
  setCurrentPost: (state, payload) => {
    state.currentPost = payload
  }
}

const actions = {

  fetchPosts: (context) => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$axios.get('https://staging.andmine.com/wp/pwa/sampleapi/dev/apipwagetdata/').then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
