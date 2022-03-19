<template>
  <div class="slider bg-white">
    <b-carousel
      id="image-carousel"
      v-model="slide"
      :interval="100000"
      controls
      indicators
      background="white"
      no-hover-pause
    >
      <!-- Text slides with image -->
      <b-carousel-slide v-for="(img, i) in items.photos" :key="i"
      >
        <template #img>
          <b-img v-img:v="{src: replacePhoto(img, '1920x1080')}" fluid class="img-fluid w-100 d-block" :src="replacePhoto(img, '580x435')" alt="slide" />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <div class="thumbnail-box">
      <img class="img-thumbnail" :src="replacePhoto(img, '240x180')" alt="thumbnail" v-for="(img, i) in items.photos" @click="showSlide(i)" :key="i">
    </div>

  </div>
</template>

<script>
import helper from '../mixins/helper'
export default {
  mixins: [helper],
  data () {
    return {
      slide: 0
    }
  },
  props: {
    items: {
      type: Object
    }
  },
  methods: {
    showSlide (key) {
      this.slide = key
    }
  }
}
</script>
<style lang="scss">
 .slider {
  .carousel-item {
    img {
      cursor: zoom-in !important;
      max-height: 500px;
    }
  }
  .thumbnail-box {
    display: grid;
    grid-gap: 1rem;
    grid-auto-flow: column;
    overflow-x: auto;
    padding: 2rem;
    justify-content: center;
      img {
        cursor: pointer;
      }
  }
}
</style>
