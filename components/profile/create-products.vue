<script setup lang="ts">
const state = ref({
  name: "",
  description: "",
  price: "",
  photos: [],
  status: "",
});
const sizes = ref(undefined);
const people = [
  "Clothes",
  "Shoes",
  "Electronics",
  "Household appliances",
  "Car",
  "Stationery",
];

const selected = ref(people[0]);

const uploadImage = (e:any) => {
 console.log(e)
}
</script>

<template>
  <div class="w-full">
    <h2 class="text-3xl dark:text-slate-200 text-slate-800 font-semibold mb-4">
      Create products
    </h2>
    <UForm class="flex flex-wrap gap-x-4 gap-y-3">
      <UFormGroup class="w-[32%]" label="Product name">
        <UInput />
      </UFormGroup>
      <UFormGroup class="w-[32%]" label="Product status">
        <USelectMenu v-model="selected" :options="people" />
      </UFormGroup>
      <UFormGroup label="Price" class="w-[32%]">
        <UInput />
      </UFormGroup>
      <UFormGroup label="Description" class="w-full">
        <UTextarea />
      </UFormGroup>
      <div class="flex gap-x-2 items-center justify-between flex-wrap">
       <NuxtImg v-for="item in 10" :key="item" src="/img.jpg" class="w-12 rounded-xl"/>
      </div>
      <UFormGroup label="Products photo" class="w-full">
        <UInput type="file" accept="image/png, image/gif, image/jpg"               @change="uploadImage" class="mr-2 inline-block"/>
        <UButton variant="outline" label="Upload"/>
      </UFormGroup>
      <UButton label="Submit"/>
    </UForm>
  </div>
</template>
