<template>
  <div :class="`opsi-formulir-${nama}`" class="opsi-formulir flex flex-align-center">
    <label :for="nama">{{ label }}:</label>

    <select
      :id="nama"
      class="margin-left"
      @change="ketikaNilaiBerubah"
    >
      <option value="">Pilih</option>
      <option
        v-for="(pilihan, i) in daftarPilihan"
        :key="i"
        :value="nilaiPilihan(pilihan)"
        :selected="apakahTerpilih(pilihan)"
      >
        {{ tampilanPilihan(pilihan) }}
      </option>
    </select>
  </div>
</template>

<script>
import { formulir } from '../mixins'

export default {
  name: 'AppFormulirPilihan',
  mixins: [formulir],
  props: {
    daftarPilihan: {
      type: Array,
      required: true,
      default() {
        return []
      }
    },
    daftarPilihanBerbentukObjek: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    apakahTerpilih() {
      return (pilihan) => {
        if (this.daftarPilihanBerbentukObjek) {
          return this.value === pilihan.nilai
        }
        return this.value === pilihan
      }
    },
    tampilanPilihan() {
      return (pilihan) => {
        if (this.daftarPilihanBerbentukObjek) {
          return pilihan.teks
        }
        return pilihan
      }
    },
    nilaiPilihan() {
      return (pilihan) => {
        if (this.daftarPilihanBerbentukObjek) {
          return pilihan.nilai
        }
        return pilihan
      }
    }
  },
  methods: {
    ketikaNilaiBerubah(event) {
      if (event.target.value && event.target.value.length > 0) {
        this.$emit('input', event.target.value)
      } else {
        this.$emit('input', null)
      }
    }
  }
}
</script>
