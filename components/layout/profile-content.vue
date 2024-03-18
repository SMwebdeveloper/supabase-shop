<script setup lang="ts">

</script>

<template>
    <div
        class="w-full mb-6 md:w-[300px] bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-50 p-5 rounded-lg shadow-md border border-gray-500 dark:border-slate-800 text-center"
      >
        <div
          class="p-6 bg-slate-300 dark:bg-slate-500 inline-block rounded-full mb-4"
        >
          SM
        </div>
        <h2 class="text-xl">Samandar Mirzarakhmonov</h2>
        <h4 class="text-sm dark:text-gray-400 text-gray-800">
          samandarwebdeveloper@gmail.com
        </h4>
        <div class="pt-3 flex flex-col space-y-2">
            <UButton
              color="teal"
              variant="outline"
              size="lg"
              label="My products"
              block
              @click="() => $emit('statusProduct', 'my-products')"
            />
            <UButton
              color="teal"
              variant="outline"
              size="lg"
              label="Save products"
              block
              @click="() => $emit('statusProduct', 'save-products')"
            />
            <UButton
              color="teal"
              variant="outline"
              size="lg"
              label="Create product"
              block
              @click="() => $emit('statusProduct', 'create-products')"
            />
            <UButton
              color="teal"
              variant="outline"
              size="lg"
              label="Analytique"
              block
              @click="() => $emit('statusProduct', 'analytique')"
            />
        </div>
      </div>
</template>