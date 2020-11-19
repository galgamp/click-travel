import service from './service'

export default {
  async fetchTicketsFromDestination({ commit }, code) {
    commit('setLoading', true)
    try {
      let tickets = await service.fetchTicketsFromDestination(code)
      commit('setTickets', tickets)
      commit('setLoading', false)
    } catch (e) {
      commit('setTickets', [])
      commit('setLoading', false)
    }
  },
}
