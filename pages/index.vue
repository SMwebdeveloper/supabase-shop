<script setup lang="ts">

const handleClick = (e: any) => {
  selected.value = e;
  console.log(selected.value);
};
</script>

<template>
  <section>
    <div class="max-w-[1200px] w-full mx-auto px-6 lg:px-0">
      <div class="pt-4 w-full flex animation-scroll space-x-3 mb-3">
        <UButton
          v-for="item in 18"
          :key="item"
          class="snap-start"
          color="blue"
          variant="outline"
          @click="handleClick(item)"
          label="Shorts"
        />
      </div>
      <div
        class="grid gap-x-2 gap-y-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div v-for="item in 15" :key="item" class="bg-white dark:bg-slate-800 rounded-lg space-x-2 border-2 border-gray-200 dark:border-slate-800">
            <header>
                <NuxtImg src="/img.jpg" class="w-full h-[200px] md:h-[300px] rounded-t-lg object-cover"/>
            </header>
            <div class="py-3">
                <h2 class="text-sm mb-2 inline-block">Lorem ipsum dolor sit, amet consectetur. binas yana dnd</h2>
                <UBadge size="lg" label="99.000" color="yellow" variant="outline" class="font-semibold"/>
            </div>
            <div class="pb-3 flex items-center space-x-1">
                <UButton color="blue" size="lg" class="w-[48%] text-center" block>Buy</UButton>
                <UButton color="blue" size="lg" icon="i-heroicons-shopping-bag" class="w-[48%] text-center" block>Save</UButton>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.animation-scroll {
    overflow-y:scroll ;
}
.animation-scroll::-webkit-scrollbar{
    width: 0;
}
</style>