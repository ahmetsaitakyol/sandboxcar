<template>
  <div class="sbc__list-detail">
    <div class="box-left">
      <div class="box-filter">
        <label for="min-date">Başlangıç Tarihi</label>
        <b-form-datepicker id="min-date" v-model="minDate" locale="tr" @input="selectMinDate('minDate')" reset-button class="mb-2"></b-form-datepicker>
        <label for="max-date">Bitiş Tarihi</label>
        <b-form-datepicker id="max-date" v-model="maxDate" locale="tr" @input="selectMaxDate('maxDate')" reset-button class="mb-2"></b-form-datepicker>
        <label>Sıralama</label>
        <b-form-select :options="sortOptions" class="mb-2" size="lg" @change="sort($event)"></b-form-select>
        <label>Gösterilecek Sayı</label>
        <b-form-select v-model="selectedCount" :options="countOptions" size="lg" @change="getList()"></b-form-select>

      </div>
    </div>
    <div class="box-right">
      <div class="box">
        <ListItem :id="item.id" :photo="item.photo" :title="item.title" :price="item.price" :location="item.location" :properties="item.properties" :date="item.dateFormatted" v-for="(item, key) in list" :key="key" />
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from '../components/ListItem'
import { mapState } from 'vuex'

export default {
  components: { ListItem },
  name: 'Home',
  data () {
    return {
      selectedCount: 20,
      countOptions: [
        { value: 20, text: 20 },
        { value: 50, text: 50 }
      ],
      sortOptions: [
        { value: null, text: 'Lüften seçim yapınız' },
        {
          value: { sortDirection: 0, sort: 0 },
          text: 'Fiyat - Ucuzdan Pahalıya'
        },
        {
          value: { sortDirection: 1, sort: 0 },
          text: 'Fiyat - Pahalıdan Ucuza'
        },
        {
          value: { sortDirection: 0, sort: 1 },
          text: 'Tarih - Eskiden Yeniye'
        },
        {
          value: { sortDirection: 1, sort: 1 },
          text: 'Tarih - Yeniden Eskiye'
        },
        {
          value: { sortDirection: 0, sort: 2 },
          text: 'Yıl - Eskiden Yeniye'
        },
        {
          value: { sortDirection: 1, sort: 2 },
          text: 'Yıl - Yeniden Eskiye'
        }
      ],
      minDate: null,
      maxDate: null,
      dateQuery: {}
    }
  },
  computed: {
    ...mapState(['list'])
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      const query = {
        take: this.selectedCount,
        ...this.dateQuery
      }
      this.$store.dispatch('getList', { query: query })
    },
    selectMinDate () {
      this.dateQuery.minDate = this.minDate ? new Date(this.minDate).toISOString().slice(0, -1) : null
      this.getList()
    },
    selectMaxDate () {
      this.dateQuery.maxDate = this.maxDate ? new Date(this.maxDate).toISOString().slice(0, -1) : null
      this.getList()
    },
    sort (e) {
      if (e) {
        this.dateQuery = {
          ...this.dateQuery,
          ...e
        }
      }
      this.getList()
    }
  }
}
</script>
<style lang="scss">
  .sbc__list-detail {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 1rem;
    @media screen and (max-width: 960px) {
      grid-template-columns: 1fr;
    }
    .box-left {
      .box-filter {
        background: white;
        padding: 1rem;
        text-align: left;
      }
    }
    .box {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat( auto-fill, minmax(300px, 1fr) );
      overflow-x: auto;
    }

  }
</style>
