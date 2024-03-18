<script setup lang="ts">
definePageMeta({ title: 'Supabase-shop | Profile' })
const statusProducts = ref('my-products')
const handleStatusProducts = (event:any) => {
 statusProducts.value =  event
}
</script>
<template>
    <section>
        <div class="max-w-[1200px] w-full mx-auto px-6 lg:px-0 pt-5 flex flex-col md:flex-row items-start md:space-x-4">
        <LayoutProfileContent @statusProduct="handleStatusProducts"/>
            <div>
                <ProfileMyProducts v-if="statusProducts === 'my-products'"/>
                <ProfileSaveProducts v-else-if="statusProducts === 'save-products'"/>
                <ProfileCreateProducts v-else-if="statusProducts === 'create-products'"/>
                <ProfileAnalytique v-else/>
            </div>
        </div>
    </section>
</template>
