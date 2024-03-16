<template>
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
</template>