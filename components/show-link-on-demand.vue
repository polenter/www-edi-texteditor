<template>
<div>
    <a v-if="!show" href="#" @click.prevent="showLink"><slot name="hint">{{ hintText }}</slot></a>
    <a v-if="show" :href="href"><slot name="default">{{ href }}</slot></a>
</div>
</template>

<script>
export default {
    props: ['href', 'hint'],
    data: function() {
        return {
            show: false,
            hrefValue: '#',
            hintText: this.hint ?? this.$t('showLink'),
            textValue: this.hint ?? this.$t('showLink')
        }
    },
    methods: {
        showLink() {
            this.hrefValue = this.href
            this.show=true
        }
    }
}
</script>

<style scoped>

</style>

<i18n lang=yaml>
en:
    showLink: "Show Link"
de:
    showLink: "Link anzeigen"    
</i18n>