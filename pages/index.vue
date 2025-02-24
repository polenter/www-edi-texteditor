<template>
<div>
      <lazy-de-landing-page v-if="$i18n.locale==='de'"></lazy-de-landing-page>  
      <lazy-en-landing-page v-else></lazy-en-landing-page>    
</div>
</template>

<script>
import articleHeadMixin from '~/api/mixins/article-head-mixin'

export default {
  mixins: [articleHeadMixin],
  async asyncData({app, $config, $content}) {
      const article = await $content(`${app.i18n.locale}/home/home`).fetch()
      return {
          article
      }
  } 
}
</script>

<style scoped>

</style>