<template>
<div class="feature-row-image">
    <h3 class="text-xl uppercase text-gray-600 mb-2">{{ title }}</h3>
    <nuxt-img :src="src" :alt="alt" class="shadow-lg rounded" :width="width"></nuxt-img>      
</div>
</template>

<script>
export default {
    props: ['src', 'alt', 'title', 'width']
}
</script>

<style>

</style>