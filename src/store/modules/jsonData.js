import jsonData from '../../assets/data.json'

export default {
  state: {
    jsonPosts: jsonData.SyncTickets,
  },

  actions: {},

  mutations: {},

  getters: {
    allPosts(state) {
      return state.jsonPosts;
    },

    numOfJsonPosts: (state) => (num) => state.jsonPosts.slice(0, num),
  },
}