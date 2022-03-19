<template>
  <div class="list-detail">
    <b-row class="px-5">
      <b-col cols="12">
        <h3 class="text-left">{{listDetail.title}}</h3>
      </b-col>
      <b-col cols="12" sm="12" md="6" class="p-4">
        <Slider :items="listDetail" />
      </b-col>
      <b-col cols="12" sm="12" md="4" class="p-4">
        <div class="bg-white information">
          <p class="price px-3 py-1 mb-0">{{priceFormat(listDetail.price)}}</p>
          <p class="address px-3 py-1 mb-0" v-if="listDetail.location">{{listDetail.location.cityName}} / {{listDetail.location.townName}}</p>
          <b-list-group class="advert-list">
            <AdvertItem title="İlan No" :value="listDetail.id" />
            <AdvertItem title="İlan Tarihi" :value="listDetail.dateFormatted" />
            <AdvertItem title="Marka" :value="listDetail.modelName" />
            <AdvertItem title="Yıl" :value="getProperty('year')" />
            <AdvertItem title="Yakıt Tipi" :value="getProperty('fuel')" />
            <AdvertItem title="Km" :value="getProperty('km')" />
            <AdvertItem title="Vites Tipi" :value="getProperty('gear')" />
          </b-list-group>
        </div>
      </b-col>
      <b-col cols="12" sm="12" md="2" class="p-4">
        <div class="user-info bg-white" v-if="listDetail.userInfo">
          <p class="name">{{listDetail.userInfo.nameSurname}}</p>
          <p class="phone">{{listDetail.userInfo.phoneFormatted}}</p>
        </div>
      </b-col>
    </b-row>
    <b-row class="px-5">
      <b-col cols="12">
        <h3 class="text-left">İlan Detayları</h3>
      </b-col>
      <b-col>
        <p v-html="listDetail.text"></p>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import AdvertItem from '../components/AdvertItem'
import Slider from '../components/Slider.vue'
import helper from '../mixins/helper'
import { mapState } from 'vuex'

export default {
  components: {
    AdvertItem,
    Slider
  },
  mixins: [helper],
  computed: {
    ...mapState(['listDetail'])
  },
  mounted () {
    this.$store.dispatch('getListDetail', { id: this.$route.params.id })
  },
  methods: {
    getProperty (p) {
      if (this.listDetail.properties) {
        return this.listDetail.properties.filter(i => i.name === p)[0].value || null
      }
    }
  }
}
</script>
<style lang="scss">
  .information {
    height: 500px;
    .price {
      font-size: 2rem;
      font-weight: bold;
      color: red;
      text-align: left;
    }
    .address {
      font-size: 1.25rem;
      font-weight: bold;
      color: black;
      text-align: left;
    }
  }
  .user-info {
    padding: 1rem;
    .name {
      font-weight: bold;
      font-size: 1.5rem;
    }
    .phone {
      font-weight: bold;
    }
  }
</style>
