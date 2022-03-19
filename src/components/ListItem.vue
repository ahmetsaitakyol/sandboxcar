<template>
  <div @click="goDetailPage()">
    <b-card class="list-card" :img-src="replacePhoto(photo, '240x180')" img-top>
      <div class="d-flex justify-content-between">
        <p><b>{{location.cityName}}</b></p>
        <p> {{model.value}}</p>
      </div>
      <div class="title">
        <p>{{title}}</p>
      </div>
      <p class="price">{{priceFormat(price)}}</p>
      <hr>
      <p class="mb-0">{{date}}</p>

    </b-card>
  </div>
</template>
<script>
import helper from '../mixins/helper'
export default {
  name: 'ListItem',
  mixins: [helper],
  data () {
    return {
    }
  },
  props: {
    photo: {
      type: String
    },
    price: {
      type: Number
    },
    title: {
      type: String
    },
    date: {
      type: String
    },
    location: {
      type: Object
    },
    properties: {
      type: Array,
      default: () => {
        return []
      }
    },
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    model () {
      return this.properties.filter(i => i.name === 'year')[0] || []
    }
  },
  methods: {
    goDetailPage () {
      this.$router.push({ name: 'ListDetail', params: { id: this.id } })
    }
  }
}
</script>
<style lang="scss">
  .list-card {
    cursor: pointer;
    padding: 1rem;
    min-width: 250px !important;
    .card-body {
      position: relative;
      padding: 1rem 0 0 0;
      .title {
        line-height: 20px;
        height: 40px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 1rem;
        text-align: left;
      }
      .price {
        font-size: 1.1rem;
        font-weight: 800;
        text-align: right;
      }
    }
  }
</style>
