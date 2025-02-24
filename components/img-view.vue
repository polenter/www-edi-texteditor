<template>
<div v-if="link" class="flex justify-center" v-bind="$attrs">
  <a :href="src" @click.prevent="showImage">
    <nuxt-img :src="src" :alt="alt" :width="width"></nuxt-img>
  </a>
  <div v-if="dialog" class="image-zoom fixed inset-0 flex items-center justify-center bg-white z-50" @click="hideImage">
    <nuxt-img :src="src" :alt="alt" class="cursor-pointer"></nuxt-img>
    <svg-icon icon="close" class="absolute w-8 cursor-pointer opacity-50" style="right: 0; top: 0;"></svg-icon>
  </div>  
</div>

<nuxt-img v-else :src="src" :alt="alt" :width="width"></nuxt-img>

</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
        alt: String,
        title: String,
        link: Boolean,
        width: {
          type: Number,
          default: () => 500
        }
    },
    data: function() {
        return {
            dialog: false
        }
    },
    methods: {
      showImage() {
        if (this.link) {
          this.dialog = true
        }
      },
      hideImage() {
          this.dialog = false;
      }
    }
}
</script>

<style>

</style>