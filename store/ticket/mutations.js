export default {
  setTickets({ items }, tickets) {
    items.splice(0, items.length)
    items.push(...tickets)
  },
  setLoading({ loading }, value) {
    loading = value
  },
}
