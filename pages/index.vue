<script setup lang="ts">
const selected = ref('tab1')
const items = [
  'tab1','tab2','tab3'
];
const tabs = ref([
{
  label: 'Tab1',
  content: 'This is the content shown for Tab1'
}, {
  label: 'Tab2',
  content: 'And, this is the content for Tab2'
}, {
  label: 'Tab3',
  content: 'Finally, this is the content for Tab3'
    },
    {
  label: 'Tab1',
  content: 'This is the content shown for Tab1'
}, {
  label: 'Tab2',
  content: 'And, this is the content for Tab2'
}, {
  label: 'Tab3',
  content: 'Finally, this is the content for Tab3'
    },
    {
  label: 'Tab1',
  content: 'This is the content shown for Tab1'
}, {
  label: 'Tab2',
  content: 'And, this is the content for Tab2'
}, {
  label: 'Tab3',
  content: 'Finally, this is the content for Tab3'
}
])

const handleClick = (e: any) => {
    selected.value = e
}
const selectedTab = computed(() => {
    const index = tabs.value.filter((item:any) => item.label.toUpperCase() === selected.value)
    return index
})
</script>

<template>
  <section>
    <div class="max-w-[1200px] w-full mx-auto px-6 lg:px-0">
        <div class="pt-4">
            <UButton v-for="item in items" :key="item" @click="handleClick(item)" :label="item"/>
        </div>
        <div  class="grid grid-cols-4">
            <UCard v-for="item in selectedTab" :key="item.label">
                <template #header>
                    <h2>{{ item?.label }}</h2>
                </template>
            </UCard>
        </div>
    </div>
  </section>
</template>
