<template>
<div class="search-input relative" @click.stop>
  <input type="text" v-model="searchQuery" :placeholder="`${$t('search')}...`" class="bg-blue-300 rounded-lg border-0 outline-none">
  <div v-if="showResults" class="search-input-results absolute border-2 rounded-lg p-2 z-50 w-max bg-gray-100 shadow-2xl border-gray-300">
    <ul>
      <li v-for="article of articles" :key="article.slug" class="search-input-result-item mb-1">
            <NuxtLink :to="{ name: `blog-slug___${$i18n.locale}`, params: { slug: article.slug } }"
                      @click.native="searchQuery = ''" class="search-input-result-content hover:text-yellow-600">
            
            <p class="text-sm"><svg-icon icon="file-document-outline" class="inline-block w-4"></svg-icon> {{ article.title }}</p>            
            <p class="text-xs text-gray-600 ml-6">{{ article.subtitle }}</p>
            </NuxtLink>          
      </li>
    </ul>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        searchQuery: '',
        articles: []
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery) {
          this.articles = []
          return
        }
        this.articles = await this.$content(`${this.$i18n.locale}/blog/articles`)
          .limit(12)
          .search(searchQuery)
          .fetch()
      }
    },
    computed: {
      showResults: function() {
        return !!this.searchQuery && this.searchQuery.length > 2
      }
    },
    mounted() {
      document.body.addEventListener('click', this.click)
    },
    beforeDestroy() {
      document.body.removeEventListener('click', this.click)
    },
    methods: {
      click(e) {
        this.searchQuery = ''
      }
    }
  }
</script>


<style>

</style>


<i18n lang="yaml">
en:
  search: "Search"
de:
  search: "Suchen"
</i18n>