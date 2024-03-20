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
      <div class="flex items-start justify-between">
        <SharedCarousel :items="items" class="w-[25%]" />
        <div class="w-[70%]">
          <h2
            class="text-4xl dark:text-slate-200 text-slate-800 font-semibold mb-4"
          >
            Shoes
          </h2>
          <h6 class="text-slate-800 dark:text-slate-200 text-lg">
            Vendor: Kimdir
          </h6>
          <h6 class="text-slate-800 dark:text-slate-200 text-lg">
            Deliver: 1 day
          </h6>
          <div class="pt-3">
            <h5 class="text-slate-800 dark:text-slate-200 text-md">Count:</h5>
            <div
              class="border border-gray-800 w-24 p-2 flex items-center justify-around"
            >
              <button class="text-md">-</button>
              <span class="inline-block text-md">1</span>
              <button><UIcon name="i-heroicons-plus-20-solid" size=/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
