<template>
<div class="text-center">
    <h1 class="text-5xl 2xl:text-7xl font-sans uppercase font-light">{{ title }}</h1>
    <p v-if="!!subtitle" class="text-lg font-light uppercase tracking-widest">{{ subtitle }}</p>
</div>  
</template>

<script>
export default {
    props: ['title', 'subtitle']
}
</script>

<style>

</style>