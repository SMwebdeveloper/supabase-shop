<script setup lang="ts">
const products = [{
    label: 'active'
},
{
    label:'sold out'
}]
</script>
<template>
    <section class="w-full">
        <h2 class="text-3xl dark:text-slate-200 text-slate-800 font-semibold mb-4">My products</h2>
        <div class="space-x-2">
        <!-- <UButton color="blue" variant="soft" label="Active"/>
        <UButton color="blue" variant="soft" label="Sold out"/> -->
        <UTabs :items="products" class="shadow-lg"/>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2 pt-2 pb-4">
        <SharedCard/>
    </div>
    </section>
</template>