<script setup lang="ts">
const state = ref({
    name: '',
    description: '',
    price: '',
    photos: [],
})
</script>

<template>
    <div>
        <h2 class="text-3xl text-slate-200 font-semibold mb-4">Create products</h2>
       <UForm class="w-[800px]">
        <UFormGroup class="w-1/2">
            <UInput/>
        </UFormGroup>
       </UForm>
    </div>
</template>