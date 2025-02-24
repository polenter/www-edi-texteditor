<template>
<div>
    <page-header :title="article.title" :subtitle="article.subtitle"></page-header>
    <nuxt-content :document="article" class="main-article max-w-prose mx-auto"></nuxt-content>        
</div>
</template>

<script>
import articleHeadMixin from '~/api/mixins/article-head-mixin'

export default {
  mixins: [articleHeadMixin],
  async asyncData({app, $config, $content}) {
      const article = await $content(`${app.i18n.locale}/support/support`).fetch()

      return {
          article
      }
  }
}
</script>

<style>

</style>