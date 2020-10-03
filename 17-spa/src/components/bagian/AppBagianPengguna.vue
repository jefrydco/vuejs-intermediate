<template>
  <section class="pengguna">
    <app-formulir-input
      v-model="namaPenggunaMasuk"
      nama="masuk"
      label="Nama Pengguna"
      class="margin-bottom"
    >
      <template #aksi="">
        <app-tombol
          nama="masuk"
          label="Masuk"
          class="margin-left"
          @klik="ketikaTombolMasukDiKlik"
        />
      </template>
    </app-formulir-input>
    <app-formulir-input
      v-model="namaPenggunaDaftar"
      nama="daftar"
      label="Nama Pengguna"
      class="margin-bottom"
    >
      <template #aksi="">
        <app-tombol
          nama="daftar"
          label="Daftar"
          class="margin-left"
          @klik="ketikaTombolDaftarDiKlik"
        />
      </template>
    </app-formulir-input>
    <app-tombol
      nama="keluar"
      label="Keluar"
      @klik="ketikaTombolKeluarDiKlik"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      namaPenggunaMasuk: 'jefrydco',
      namaPenggunaDaftar: null
    }
  },
  methods: {
    ketikaTombolMasukDiKlik() {
      this.$store.dispatch('pengguna/masuk', {
        namaPengguna: this.namaPenggunaMasuk
      })
    },
    ketikaTombolDaftarDiKlik() {
      this.$store.dispatch('pengguna/daftar', {
        namaPengguna: this.namaPenggunaDaftar
      })
    },
    ketikaTombolKeluarDiKlik() {
      this.$store.dispatch('pengguna/keluar')
      this.$emit('keluar')
    }
  }
}
</script>