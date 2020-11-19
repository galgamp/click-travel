export default {
  setDestinations({ items }, destinations) {
    items.splice(0, items.length)
    items.push(...destinations)
  },
  setLoading({ loading }, value) {
    loading = value
  },
}
