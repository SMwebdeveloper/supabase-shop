<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <UCarousel
    :items="items"
    :ui="{
      item: 'basis-full',
      container: 'rounded-lg',
      indicators: {
        wrapper: 'relative bottom-0 mt-4',
      },
    }"
    :prev-button="{
      color: 'blue',
  icon: 'i-heroicons-arrow-left-20-solid',
      class: '-left-3'
    }"
    :next-button="{
      color: 'blue',
      icon: 'i-heroicons-arrow-right-20-solid',
      class: '-right-3',
    }"
    class="w-[450px] flex flex-col items-center justify-start"
    arrows
    indicators
  >
    <template #default="{ item }">
      <img :src="item" class="w-[250px] mx-auto rounded-lg" draggable="false" />
    </template>

    <template #indicator="{ onClick, page, active }">
      <UButton
        color="blue"
        :label="String(page)"
        :variant="active ? 'solid' : 'outline'"
        size="2xs"
        class="rounded-full min-w-6 justify-center"
        @click="onClick(page)"
      >
      </UButton>
    </template>
  </UCarousel>
</template>
