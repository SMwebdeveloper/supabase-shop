<script setup lang="ts">
useHead({title: 'Supabase-shop'})
</script>
<template>
  <LayoutNavbar/>
  <section class="bg-slate-100 dark:bg-slate-700 min-h-[87vh]">
    <slot />
  </section>
</template>
