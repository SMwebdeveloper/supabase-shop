<script setup lang="ts">
const isOpen = ref(false);
const visibleSearch = ref(false);
const route = useRoute();
watchEffect(() => {
  route.name === "index"
    ? (visibleSearch.value = true)
    : (visibleSearch.value = false);
});
</script>
<template>
  <section
    class="py-5 border-b-2 border-gray-400 dark:border-gray-50 dark:bg-slate-900"
  >
    <div
      class="max-w-[1200px] w-full mx-auto px-6 lg:px-0 flex items-center justify-between"
    >
      <NuxtLink to="/" class="hidden md:flex">
        <h2 class="text-3xl font-semibold text-slate-700 dark:text-slate-50">
          Supabase<span class="font-bold text-sky-500">Shop</span>
        </h2>
      </NuxtLink>
      <UInput
        v-if="visibleSearch"
        icon="i-heroicons-magnifying-glass-20-solid"
        size="sm"
        color="blue"
        trailing
        placeholder="Search..."
        class="w-[70%] md:w-[40%]"
      />
      <div class="hidden lg:flex items-center justify-center space-x-2">
        <SharedColorMode />
        <NuxtLink to="/profile">Profile</NuxtLink>
        <NuxtLink to="/auth">
          <UButton color="blue" variant="solid" label="Register" />
        </NuxtLink>
      </div>
      <UButton
        color="gray"
        variant="ghost"
        icon="i-heroicons-bars-3-solid"
        @click="isOpen = true"
        class="lg:hidden"
      />
    </div>

    <div v-if="isOpen">
      <USlideover v-model="isOpen">
        <UCard
          class="flex flex-col flex-1"
          :ui="{
            body: { base: 'flex-1' },
            ring: '',
            divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          }"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <NuxtLink to="/">
                <h2
                  class="text-3xl font-semibold text-slate-700 dark:text-slate-50"
                >
                  Supabase<span class="font-bold text-sky-500">Shop</span>
                </h2>
              </NuxtLink>
              <UButton
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                class="-my-1"
                @click="isOpen = false"
              />
            </div>
          </template>

          <Placeholder class="h-full" />
          <div class="flex flex-col items-start justify-center space-y-2">
            <SharedColorMode />
            <NuxtLink to="/profile" @click="isOpen = false">
              <UButton
                color="white"
                variant="link"
                label="Profile"
                @click="isOpen = false"
                class="p-0 text-xl"
              />
            </NuxtLink>
            <NuxtLink to="/auth">
              <UButton
                color="white"
                variant="link"
                label="Register"
                @click="isOpen = false"
                class="p-0 text-xl"
              />
            </NuxtLink>
          </div>
        </UCard>
      </USlideover>
    </div>
  </section>
</template>
