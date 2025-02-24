<template>
    <a v-if="!!item" :href="getLink()" v-bind="$attrs">
        <slot name="default"></slot>        
    </a>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        getLink() {
            return `/${this.$i18n.locale}/blog/${this.item.slug}`
        }
    }
}
</script>

<style>

</style>