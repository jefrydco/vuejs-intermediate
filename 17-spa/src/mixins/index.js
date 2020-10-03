export const formulir = {
  props: {
    nama: {
      type: String,
      required: true,
      default: 'tanpa-nama'
    },
    label: {
      type: String,
      required: true,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    }
  }
}
