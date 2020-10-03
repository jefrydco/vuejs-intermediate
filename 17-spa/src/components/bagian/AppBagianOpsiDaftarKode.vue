<template>
  <section class="opsi-daftar-kode">
    <div class="opsi-halaman flex flex-align-center margin-bottom">
      <app-tombol
        nama="sebelumnya"
        label="Sebelumnya"
        :nonaktif="halaman === 1"
        @klik="ketikaTombolSebelumnyaDiKlik"
      />
      <app-tombol
        nama="selanjutnya"
        label="Selanjutnya"
        class="margin-left"
        @klik="ketikaTombolSelanjutnyaDiKlik"
      />
    </div>
    <app-formulir-input
      :value="banyakData"
      nama="banyak-data"
      label="Banyak Data"
      tipe="number"
      class="margin-bottom"
      @input="$emit('update:banyakData', $event)"
    />
    <!-- <div class="opsi-highlight-menyala margin-bottom">
      <app-radio
        :value="apakahHighlightMenyala"
        :daftar-pilihan="daftarHighlightMenyala"
        nama="highlight-menyala"
        label="Highlighter"
        @input="$emit('update:apakahHighlightMenyala', $event)"
      />
    </div> -->
    <app-formulir-pilihan
      :value="urutkanBerdasarkan"
      nama="urutkan-berdasarkan"
      label="Urutkan Berdasarkan"
      class="margin-bottom"
      :daftar-pilihan="daftarUrutkanBerdasarkan"
      :daftar-pilihan-berbentuk-objek="true"
      @input="$emit('update:urutkanBerdasarkan', $event)"
    />
    <app-formulir-pilihan
      :value="urutkan"
      nama="urutkan"
      label="Urutkan"
      class="margin-bottom"
      :daftar-pilihan="daftarUrutkan"
      :daftar-pilihan-berbentuk-objek="true"
      @input="$emit('update:urutkan', $event)"
    />
  </section>
</template>

<script>
export default {
  props: {
    halaman: {
      type: Number,
      required: true,
      default: 1
    },
    banyakData: {
      type: Number,
      required: true,
      default: 5
    },
    urutkanBerdasarkan: {
      type: String,
      required: true,
      default: 'fileName'
    },
    urutkan: {
      type: String,
      required: true,
      default: 'DESC'
    },
    apakahHighlightMenyala: {
      type: Number,
      required: true,
      default: 1
    }
  },
  data() {
    return {
      daftarHighlightMenyala: [
        { nilai: 1, teks: 'Menyala' },
        { nilai: 0, teks: 'Tidak Menyala' }
      ],
      daftarUrutkanBerdasarkan: [
        { nilai: 'fileName', teks: 'Nama Berkas' },
        { nilai: 'lang', teks: 'Bahasa Pemrograman' },
        { nilai: 'createdAt', teks: 'Kapan Dibuat' }
      ]
    }
  },
  computed: {
    daftarUrutkan() {
      if (this.urutkanBerdasarkan === 'createdAt') {
        return [
          { nilai: 'ASC', teks: 'Terlama' },
          { nilai: 'DESC', teks: 'Terbaru' }
        ]
      }
      return [
        { nilai: 'ASC', teks: 'A-Z' },
        { nilai: 'DESC', teks: 'Z-A' }
      ]
    }
  },
  methods: {
    ketikaTombolSebelumnyaDiKlik() {
      if (this.halaman - 1 < 1) {
        return
      }
      this.$emit('update:halaman', this.halaman - 1)
    },
    ketikaTombolSelanjutnyaDiKlik() {
      this.$emit('update:halaman', this.halaman + 1)
    }
  }
}
</script>
