<template>
  <div>
    <b-container fluid class="header">
      <router-link class="logo" to="/">
        <img src="https://arbimg1.mncdn.com/assets2/dist/img/tek-tur-large.gif" alt="Logo">
      </router-link>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
  .header {
    background: white;
    text-align: left;
    padding: 1rem;
    .logo {
      color: black;
      text-decoration: unset;
      line-height: 1.4;
    }
  }
</style>
