<template>
  <div class="lg:w-max mx-auto">
    <page-header :title="article.title" :subtitle="article.subtitle"></page-header>    
    <nuxt-content :document="article" class="main-article"></nuxt-content>      
  
    <blog-article-timeline :items="allArticles" class="mt-10"></blog-article-timeline>

  </div>
</template>

<script>
import articleHeadMixin from '~/api/mixins/article-head-mixin'

export default {
  
  mixins: [articleHeadMixin],
  async asyncData({$api, app, $config, $content}) {
      const article = await $content(`${app.i18n.locale}/blog/blog`).fetch()
      // https://nuxtjs.org/blog/creating-blog-with-nuxt-content      
      const allArticles = await $api.blog.queryAllArticlesAsync().fetch()

      return {
          article,
          allArticles
      }
  }
}
</script>

<style scoped>

</style>