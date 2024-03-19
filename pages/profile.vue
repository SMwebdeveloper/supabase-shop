<script setup lang="ts">
definePageMeta({ title: "Supabase-shop | Profile" });
const statusProducts = ref();
const handleStatusProducts = (event: any) => {
  localStorage.setItem("products-status", event);
  statusProducts.value = localStorage.getItem("products-status");
};
onMounted(() => {
    statusProducts.value = localStorage.getItem('products-status')
})
</script>
<template>
  <section>
    <div
      class="max-w-[1200px] w-full mx-auto px-6 lg:px-0 pt-5 flex flex-col md:flex-row items-start md:space-x-4"
    >
      <LayoutProfileContent @statusProduct="handleStatusProducts" />
      <div class="w-full md:w-[80%]">
        <ProfileMyProducts v-if="statusProducts === 'my-products'" />
        <ProfileSaveProducts v-else-if="statusProducts === 'save-products'" />
        <ProfileCreateProducts
          v-else-if="statusProducts === 'create-products'"
        />
        <ProfileAnalytique v-else-if="statusProducts === 'analytique'" />
      </div>
    </div>
  </section>
</template>
