<template>
  <section>
      <i-container>
        <i-row>
            <i-column xl="12" lg="8" md="6" sm="6" xs="3">
                <div class="login-wrapper">
                    <div class="logo-wrapper">
                        <img src="../../assets/himitxdana.png" alt="Event Himit PENS x DANA">
                    </div>
                    <div class="info">
                        <span class="h5">APLIKASI SYNTAX HIGHLIGHTER TO IMG</span>
                        <div class="switcher">
                        MASUK <i-toggle v-model="toggled"></i-toggle> DAFTAR
                        </div>
                        <ul v-show="toggled == false">
                            <li>Kamu harus login terlebih dahulu 😁</li>
                            <li>Masukkan nama kamu 😀</li>
                            <li>Jika belum punya, silahkan daftar 👍</li>
                        </ul>
                        <ul v-show="toggled == true">
                            <li>Buat nama yang unik 👌</li>
                            <li>Maksimal 10 karakter 🐱‍🏍</li>
                            <li>Dilarang menggunakan karakter khusus 👉👈</li>
                        </ul>
                    </div>
                    <div class="input-wrapper">
                        <i-input v-show="toggled == false" v-model="namaMasuk" placeholder="Masukkan Nama">
                            <i-button slot="append">Masuk</i-button>
                        </i-input>
                        <i-input v-show="toggled == true" v-model="namaDaftar" placeholder="Masukkan Nama">
                            <i-button slot="append">DAFTAR</i-button>
                        </i-input>
                    </div>
                </div>
            </i-column>
        </i-row>
    </i-container>
  </section>
</template>

<script>
export default {
    data(){
        return {
            namaMasuk: 'yuza',
            namaDaftar: '',
            toggled: false
        }
    }
}
</script>

<style scoped>
section {
    height: 100vh;
    background-color: #56BAED;
}

.login-wrapper {
    width: 500px;
    margin: 10% auto 0;
    background: white;
    border-radius: 6px;
    padding: 60px 70px;
}

.logo-wrapper {
    display: flex;
    justify-content: center;
}

.switcher {
    padding: 5px 0;
    text-align: center;
}

.info {
    margin-top: 10px;
}

.info > .h5 {
    text-align: center;
}

.info > ul {
    margin: 40px 0;
}

.input-wrapper {
    margin-top: 10px;
}
</style>