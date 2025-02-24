<template>
    <ul>
      <li v-for="article of items" :key="article.slug" class="search-input-result-item mb-4">
            <NuxtLink :to="{ name: `blog-slug___${$i18n.locale}`, params: { slug: article.slug } }"
                      @click.native="searchQuery = ''" class="search-input-result-content hover:text-yellow-600">
            
            <p><svg-icon icon="file-document-outline" class="inline-block w-4"></svg-icon> 
                <span class="font-semibold text-black">{{ article.title }}</span> 
                <span class="bg-yellow-200 text-xs  py-1 px-2 rounded-full">{{ $api.format.formatLocaleDate(article.updatedAt) }}</span></p>            
            <p class="text-sm text-gray-600 ml-6">{{ article.subtitle }}</p>
            </NuxtLink>          
      </li>
    </ul>
</template>

<script>
export default {
    props: ['items']
}
</script>

<style scoped>

</style>
    

