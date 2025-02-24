<template>
<select name="lang" v-model="value" @change="changeLanguage" class="lang-switcher bg-blue-400 text-gray-100 hover:text-blue-200 border-0 rounded-lg">
  <option v-for="item in items" :key="item.value" :value="item.code" class="lang-switcher-item">{{ item.name }}</option>
</select>
</template>

<script>
export default {
    data: function() {
        return {
            items: this.$i18n.locales,
            value: this.$i18n.locale
        }
    },
    watch: {
        value: function() {            
            this.$i18n.setLocale(this.value)
        }
    },
    methods: {
        changeLanguage(e) {
            this.value = e.target.value
        }
    }
}    
</script>

<style>

</style>