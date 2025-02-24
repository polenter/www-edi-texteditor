<template>
<ul class="main-navigation flex space-x-4 h-full">
    <li v-for="route in routes" :key="route.name" class="main-navigation-item text-gray-100 h-full">
    <nuxt-link :to="{ name: route.name.concat($i18n.locale) }">{{ $t(route.caption) }}</nuxt-link>
    </li>
    <li>
        <external-link :href="docUrl" target="_blank" rel="noopener">{{ docCaption }}</external-link>
    </li>
</ul>
</template>

<script>
export default {
  props: ['routes'],
  computed: {
    // Using $i18n must be done in computed,
    // since data - is not updated after selecting a language,
    // without refreshing the page
    docUrl: function() {
        const lang = this.$i18n.locale;
        const url = "https://docs.edi-texteditor.com/";
        return lang === "en" ? url.concat("en/") : url;
    },
    docCaption: function() {
        return this.$t('docs');
    }
  }
}
</script>

<style scoped>
.nuxt-link-exact-active {
@apply text-white font-bold;
}

a {
    @apply text-gray-100 hover:text-blue-200;
}
</style>

<i18n lang=yaml>
en:
    home: 'Home'
    download: 'Download'
    features: 'Features'
    purchase: 'Purchase'
    support: 'Support'
    blog: 'Blog'
    docs: 'Docs'
    imprint: 'Imprint'
    privacy: 'Privacy Policy'
de:
    home: 'Home'
    download: 'Download'
    features: 'Features'
    purchase: 'Kaufen'
    support: 'Support'
    blog: 'Blog'
    docs: 'Doku'
    imprint: 'Impressum'
    privacy: 'Datenschutzrichtlinien'    
</i18n>