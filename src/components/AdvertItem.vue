<template>
  <b-list-group-item class="d-flex">
    <div class="w-50 text-left">
      <b>{{title}}:</b>
    </div>
    <div class="w-50 text-left">
      <span> {{value}}</span>
    </div>
  </b-list-group-item>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    value: {
      default: '-'
    }
  }
}
</script>
<style lang="scss">
  .advert-list {
    border-radius: 0 !important;
    .list-group-item {
      border-left: 0;
      border-right: 0;
    }
  }
</style>
