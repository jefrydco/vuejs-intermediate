<template>
  <div
    v-if="$store.state.notifikasi.apakahTampil"
    class="notifikasi"
  >
    {{ $store.state.notifikasi.pesan }}
  </div>
</template>

<script>
export default {
  name: 'AppNotifikasi',
}
</script>

<style>
.notifikasi {
  border: 1px solid #1a202c;
  background: #eee;
  position: fixed;
  right: 50px;
  top: 50px;
  width: 300px;
  height: auto;
  padding: 10px;
  border-radius: 5px;
}
</style>
