<template>
<div class="feature-row grid grid-cols-1 sm:grid-cols-2 items-center">

    <div class="feature-column order-2" :class="{'sm:order-1': !invertcolumns}">
        <div class="feature-column-content">
            <div class="text-center">
            <p class="leading-8 xl:text-xl 2xl:text-2xl font-thin"><slot name="text"></slot></p>
            <slot name="cta"></slot>
            </div>
        </div>
    </div>

    <div class="feature-column order-1" :class="{'sm:order-2': !invertcolumns}">
        <div class="feature-column-content">
            <div class="sm:max-w-2xl">
                <slot name="image"></slot>
            </div>
        </div>
    </div>

</div>  
</template>

<script>
export default {
    props: ['invertcolumns']
}
</script>

<style>

</style>