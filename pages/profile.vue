<script setup lang="ts">
definePageMeta({ title: 'Supabase-shop | Profile' })
const statusProducts = ref('my-products')
</script>
<template>
    <section>
        <div class="max-w-[1200px] w-full mx-auto px-6 lg:px-0 pt-5 flex items-start space-x-4">
            <LayoutProfileContent/>
            <div>
                <ProfileMyProducts v-if="statusProducts === 'my-products'"/>
                <ProfileSaveProducts/>
                <ProfileCreateProducts/>
                <ProfileAnalytique/>
            </div>
        </div>
    </section>
</template>
