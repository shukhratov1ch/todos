<script setup lang="ts">
    import { useAttrs } from 'vue';
    const attrs = useAttrs()
</script>

<template>
      <button
    v-bind="attrs"
    class="
      text-sm
      md:pt-2 md:pb-2 md:pl-4 md:pr-4
      rounded-lg
      font-semibold
      text-white
      bg-red-500
      hover:bg-red-600
    "
  >
    <slot>Start for free</slot>
  </button>
</template>