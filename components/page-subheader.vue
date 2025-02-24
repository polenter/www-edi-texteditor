<template>
<div class="text-center">
    <h2 class="text-4xl font-sans uppercase font-light">{{ title }}</h2>
    <p v-if="!!subtitle" class="font-light uppercase tracking-widest">{{ subtitle }}</p>
</div>  
</template>

<script>
export default {
    props: ['title', 'subtitle']
}
</script>

<style>

</style>