<template>
  <div
    v-for="item in 15"
    :key="item"
    class="bg-white dark:bg-slate-900 shadow-lg rounded-lg space-x-2 border-2 border-gray-200 dark:border-slate-800"
  >
    <NuxtLink :to="`/product/${item}`" class="inline-block">
      <header>
        <NuxtImg
          src="/img.jpg"
          class="w-full h-[200px] md:h-[300px] rounded-t-lg object-cover"
        />
      </header>
      <div class="py-3">
        <h2 class="text-2xl font-semibold text-slate-800 dark:text-slate-400">
          Shorts
        </h2>
        <h6 class="text-sm mb-2 inline-block">
          Lorem ipsum dolor sit, amet consectetur. binas yana dnd
        </h6>
        <UBadge
          size="lg"
          label="99.000"
          color="yellow"
          variant="outline"
          class="font-semibold"
        />
      </div>
      <div class="pb-3 flex items-center space-x-1">
        <UButton color="blue" size="lg" class="w-[48%] text-center" block
          >Buy</UButton
        >
        <UButton
          color="blue"
          size="lg"
          icon="i-heroicons-shopping-bag"
          class="w-[48%] text-center"
          block
          >Save</UButton
        >
      </div>
    </NuxtLink>
  </div>
</template>
