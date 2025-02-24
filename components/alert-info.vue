<template>
  <div v-bind="$attrs" class="alert-info flex items-start p-4 bg-white text-opacity-80 rounded-lg border-t-8 border-blue-500 ring-1 ring-gray-300 shadow-md">
      <svg-icon v-if="!hideicon" icon="information" class="alert-icon text-blue-500 mr-2"></svg-icon>
      <div class="alert-content"><slot name="default"></slot></div>      
      </div>
</template>

<script>
export default {
  props: ['hideicon']
}
</script>

<style scoped>
svg {
  min-width: 1.6em;
  width: 1.6em;
}

p {
  margin-top: 0;
}
</style>