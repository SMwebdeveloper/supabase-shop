<script setup lang="ts">
definePageMeta({title:'Supabase-shop | Profile'})
</script>
<template>
    <section>
        <div class="max-w-[1200px] w-full mx-auto px-6 lg:px-0">
            <div class="w-[300px] bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-50 mt-5 p-5 rounded-lg shadow-md border border-gray-500 dark:border-slate-800 text-center">
               <div class="p-6 bg-slate-300 dark:bg-slate-500 inline-block rounded-full mb-4">SM</div>
                <h2 class="text-xl">Samandar Mirzarakhmonov</h2>
                <div class="pt-3 space-y-2">
                    <UButton color="teal" variant="outline" size="lg" label="My products" block/>   
                    <UButton color="teal" variant="outline" size="lg" label="Save products" block/>   
                    <UButton color="teal" variant="outline" size="lg" label="Create product" block/>   
                    <UButton color="teal" variant="outline" size="lg" label="Analytique" block/>   
                </div>
            </div>
        </div>
    </section>
</template>
