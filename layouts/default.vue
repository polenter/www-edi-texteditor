<template>
<div>
  <header>
    <div class="main-header flex flex-wrap bg-blue-400 items-center p-1">      
      <div class="main-control-panel flex space-x-2 ml-2 items-center">                
        <!-- Logo -->
        <div class="logo h-10 w-10"><nuxt-link :to="`/${$i18n.locale}`"><img src="/icons/edi.svg" alt="Edi Texteditor Logo" /></nuxt-link></div>
        <!-- Lang switcher -->
        <lang-switcher></lang-switcher>
        <!-- search input -->
        <search-input></search-input>
      </div>
      <main-navigation class="ml-auto mr-2" :routes="topRoutes"></main-navigation>
    </div>
  </header>

  <article class="p-2">
    <nuxt/>
  </article>

  <footer>
    <div class="flex flex-col bg-blue-400 mt-10">
      <main-navigation :routes="topRoutes" class="self-center py-1 hidden sm:flex"></main-navigation>
      <div class="flex flex-wrap text-sm bg-blue-500 text-gray-100 py-1 px-2">
        <div>© 2008 - {{ new Date().getFullYear() }} Polenter - Software Solutions,</div>
        <div>{{ $t('Address') }}</div>
        <main-navigation class="ml-auto mr-2" :routes="bottomRoutes"></main-navigation>
      </div>
    </div>

  </footer>
</div>

</template>

<script>
export default {
   data: function() {

      return {
        topRoutes: [
          {
            caption: "home",
            name: "index___"
          },
          {
            caption: "download",
            name: "download___"
          },
          {
            caption: "features",
            name: "features___"
          },
          {
            caption: "purchase",
            name: "purchase___"
          },
          {
            caption: "support",
            name: "support___"
          },
          {
            caption: "blog",
            name: "blog___"
          }                                                  
        ],
        bottomRoutes: [
          {
            caption: "privacy",
            name: "privacy___"
          },
          {
            caption: "imprint",
            name: "imprint___"
          },
        ]
      }
    },
}
</script>

<style>

</style>

<i18n lang="yaml">
en:
  Address: "Hans-Kalscheuer-Str. 45, 51149 Cologne, Germany"
de:
  Address: "Hans-Kalscheuer-Str. 45, 51149 Köln, Deutschland"  
</i18n>