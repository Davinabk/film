<template>
  <div class="lunbo">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in d">
          <img :src="item.imgSrc" class="swImg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lunbo',
  data () {
    return {
      // msg: 'lunbo'
    }
  },
  props: ['d']

}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




</style>
