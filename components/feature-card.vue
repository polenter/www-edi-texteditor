<template>
<div class="text-center shadow-md p-4 rounded-lg border">
    <svg-icon class="w-10 h-10 mx-auto my-2 text-blue-300" :icon="icon"></svg-icon>
    <slot name="default"></slot>
</div>  
</template>

<script>
export default {
    props: ['icon']
}
</script>

<style>

</style>