export default {
  getAll: ({ items }) => items,
  getDreamDestinations: ({ items }) =>
    items.filter((item) => item.isDreamDestination === true),
}
