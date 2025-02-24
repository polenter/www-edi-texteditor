<template>
  <span v-bind="$attrs" :class="{ 'text-red-600': lengthExceeded }">{{ text }}</span>
</template>

<script>
export default {
    props: {
        maxlength: {
            type: Number,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    },
    computed: {
        text() {
            return `${this.value.length}/${this.maxlength}`
        },
        lengthExceeded() {
            return this.value.length > this.maxlength
        }
    }
}
</script>

<style>

</style>