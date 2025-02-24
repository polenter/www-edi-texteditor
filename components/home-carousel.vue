<template>
  <nuxt-img :src="items[currentItem].src" :alt="items[currentItem].alt" class="shadow-xl rounded" v-bind="$attrs" />
</template>

<script>
export default {
    props: ['items'],
    data () {
      return {
        currentItem: 0
      }
    },    
    mounted() {
      setInterval(this.nextImage, 3000)
    },
    methods: {
      nextImage(){
        if (this.currentItem==this.items.length-1) {
          this.currentItem = 0;
          return
        }

        this.currentItem = this.currentItem + 1

      }
    }
}
</script>

<style>

</style>