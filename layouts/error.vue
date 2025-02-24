<template>
  <div class="h-screen">

    <div class="max-w-sm mx-auto mt-20">
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <NuxtLink :to="`/${$i18n.locale}`">
        {{ $t(home) }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: this.$t('notFound'),
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
</style>
<i18n lang=yaml>
en:
  home: 'Home page'
  notFound: '404 - Page not found'
de:
  home: 'Startseite'  
  notFound: '404 - Seite nicht gefunden'
</i18n>
