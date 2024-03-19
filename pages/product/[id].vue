<script setup lang="ts">
const { id } = useRoute().params;
const items = [
  "https://picsum.photos/600/800?random=1",
  "https://picsum.photos/600/800?random=2",
  "https://picsum.photos/600/800?random=3",
  "https://picsum.photos/600/800?random=4",
  "https://picsum.photos/600/800?random=5",
  "https://picsum.photos/600/800?random=6",
];
</script>
<template>
  <section>
    <div class="max-w-[1200px] w-full mx-auto px-6 lg:px-0 pt-5">
      <h2
        class="text-4xl dark:text-slate-200 text-slate-800 font-semibold mb-4"
      >
        Shoes
      </h2>
      <div>
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
            color: 'gray',
            icon: 'i-heroicons-arrow-left-20-solid',
            class: '-left-12',
          }"
          :next-button="{
            color: 'gray',
            icon: 'i-heroicons-arrow-right-20-solid',
            class: '-right-12',
          }"
          class="w-64 mx-auto rounded-lg"
          arrows
          indicators
        >
          <template #default="{ item }">
            <img :src="item" class="w-full" draggable="false" />
          </template>

          <template #indicator="{ onClick, page, active }">
            <UButton
              :variant="active ? 'solid' : 'outline'"
              size="2xs"
              class="rounded-full min-w-6 justify-center"
              @click="onClick(page)"
            >
            <img :src="item" alt="" class="w-8 h-8">
        </UButton>
          </template>
        </UCarousel>
      </div>
    </div>
  </section>
</template>
