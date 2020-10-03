<template>
  <div
    v-if="$store.state.proses.apakahProsesTampil"
    class="proses"
  >
    Sedang berkomunikasi dengan server...
  </div>
</template>

<script>
export default {
  name: 'AppProses',
}
</script>

<style>
.proses {
  border: 1px solid #1a202c;
  background: #eee;
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 300px;
  height: auto;
  padding: 10px;
  border-radius: 5px;
}
</style>
