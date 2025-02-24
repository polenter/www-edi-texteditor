<template>
  <div>
    <page-header :title="article.title" :subtitle="article.subtitle"></page-header>

        <div class="lg:flex max-w-5xl mx-auto">
          <div class="ml-auto">
            <nuxt-content :document="article" class="main-article max-w-2xl mx-auto"></nuxt-content>
          </div>

            <div class="max-w-xs mx-auto">
              <div class="go-to-shop-card border px-14 py-4 shadow-lg rounded-lg">
                <div class="feature-list leading-10">
                  <p class="text-gray-600 mt-4">Edi PRO</p>
                  <ul>
                    <li><svg-icon icon="checkbox-marked-circle" class="w-6 inline-block text-blue-400 mr-8"></svg-icon>{{ $t('payOnlyOnce') }}</li>
                    <li><svg-icon icon="checkbox-marked-circle" class="w-6 inline-block text-blue-400 mr-8"></svg-icon>{{ $t('getitInstantly') }}</li>
                    <li><svg-icon icon="checkbox-marked-circle" class="w-6 inline-block text-blue-400 mr-8"></svg-icon>{{ $t('useItLifelong') }}</li>
                  </ul>
                </div>
                  <shop-link class="cta-button mt-6 mb-4" target="_blank">{{ $t('goToShop') }}</shop-link>
              </div>
            </div>
            </div>
     
  </div>
</template>

<script>
import articleHeadMixin from '~/api/mixins/article-head-mixin'

export default {
  nuxtI18n: {
      paths: {
        en: '/purchase',
        de: '/kaufen'
      }
  },
  mixins: [articleHeadMixin],
  async asyncData({app, $config, $content}) {
      const article = await $content(`${app.i18n.locale}/purchase/purchase`).fetch()
      return {
          article
      }
  }
}
</script>

<style scoped>
.go-to-shop-card {
  position: sticky;
  top: 0px;
}
</style>

<i18n lang=yaml>
en:
  payOnlyOnce: "pay only once"
  getitInstantly: "get it instantly"
  useItLifelong: "use it lifelong"
  goToShop: "Go to Shop"
de:
  payOnlyOnce: "ein Mal zahlen"
  getitInstantly: "sofortige Lieferung"
  useItLifelong: "lebenslang nutzen"
  goToShop: "Zum Shop"
</i18n>