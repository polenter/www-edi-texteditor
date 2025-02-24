<template>
    <div>
        <page-header :title="article.title" :subtitle="article.subtitle"></page-header>
        <nuxt-content :document="article" class="main-article max-w-2xl mx-auto"></nuxt-content>
    </div>
</template>

<script>
import articleHeadMixin from '~/api/mixins/article-head-mixin'

export default {
    mixins: [articleHeadMixin],
    async asyncData({app, $content}) {
        const article = await $content(`${app.i18n.locale}/download/download`).fetch()
        return {
            article
        }
    }
}
</script>

<style scoped>

</style>

