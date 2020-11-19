import service from './service'

export default {
  async fetchAllDestinations({ commit }) {
    commit('setLoading', true)
    try {
      let destinations = await service.fetchAllDestinations()
      commit('setDestinations', destinations)
      commit('setLoading', false)
    } catch (e) {
      commit('setDestinations', [])
      commit('setLoading', false)
    }
  },
}
