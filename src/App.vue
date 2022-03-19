<template>
  <div id="app">
    <Header />
    <main>
      <b-container fluid class="py-5">
        <router-view/>
      </b-container>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>
<style lang="scss">
#app {
  text-align: center;
  color: black;
  background: #f3f3f3
}

main {
  height: calc(100vh - 77px);
  overflow-y: auto
}
</style>
