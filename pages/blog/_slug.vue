<template>
  <div>
    <header class="text-center">
    <page-header :title="article.title" :subtitle="article.subtitle"></page-header>    
    <p class="text-sm mt-4">* {{ $api.format.formatLocaleDate(article.updatedAt) }} *</p>
    </header>

    <div class="blog grid grid-cols-2 text-center">
          <blog-article-navigate :item="older">
            <svg-icon icon="chevron-left" class="inline-block w-6"></svg-icon>{{ $t('older') }}
          </blog-article-navigate>          
          <blog-article-navigate :item="newer">
            {{ $t('newer') }}<svg-icon icon="chevron-right" class="inline-block w-6"></svg-icon>
          </blog-article-navigate>            
    </div>
      <div>
        <nuxt-content :document="article" class="main-article max-w-2xl mx-auto"></nuxt-content>
      </div>
    <div class="blog grid grid-cols-2 text-center my-8">
          <blog-article-navigate :item="older">
            <svg-icon icon="chevron-left" class="inline-block w-6"></svg-icon>{{ $t('older') }}
          </blog-article-navigate>          
          <blog-article-navigate :item="newer">
            {{ $t('newer') }}<svg-icon icon="chevron-right" class="inline-block w-6"></svg-icon>
          </blog-article-navigate>            
    </div>

  </div>
</template>

<script>
import articleHeadMixin from '~/api/mixins/article-head-mixin'

const defaultTrans = {
        en: { slug: ''},
        de: { slug: ''},
      }

export default {

  mixins: [articleHeadMixin],
  async asyncData({$api, $i18n, app, $content, params, store}) {
      const article = await  $api.blog.queryArticleAsync(params.slug).fetch()
      const [newer, older] = await $api.blog.queryPreviousNextAsync(params.slug).fetch()

      // https://i18n.nuxtjs.org/lang-switcher      
      const trans = article.trans ?? defaultTrans
      await store.dispatch('i18n/setRouteParams', trans)

      return {
          article,
          newer,
          older,
          newerTitle: newer?.title,
          olderTitle: older?.title

      }
  },
  methods: {
    getLink(slug) {
      return `/${this.$i18n.locale}/blog/${slug}`
    }
  }
}
</script>

<style scoped>
svg {
  @apply text-yellow-400;
}


</style>

<i18n lang=yaml>
en:
  older: "Older"
  newer: "Newer"
de:
  older: "Älter"
  newer: "Neuer"
</i18n>