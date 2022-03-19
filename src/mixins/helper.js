export default {
  methods: {
    replacePhoto: (photo, size) => {
      return photo.replace('{0}', size)
    },
    priceFormat (price) {
      return new Intl.NumberFormat('tr').format(price) + ' ₺'
    }
  }
}
