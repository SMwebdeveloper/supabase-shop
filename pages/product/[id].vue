<script setup lang="ts">
const { id } = useRoute().params;
const items = [
  "https://picsum.photos/600/800?random=1",
  "https://picsum.photos/600/800?random=2",
  "https://picsum.photos/600/800?random=3",
  "https://picsum.photos/600/800?random=4",
  "https://picsum.photos/600/800?random=5",
  "https://picsum.photos/600/800?random=6",
];
const tabs = [{label:'Description'}, {label:'Feedbacks'}]
</script>
<template>
  <section>
    <div class="max-w-[1200px] w-full mx-auto px-6 lg:px-0 pt-5">
      <div class="flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <!-- Carousel -->
        <SharedCarousel :items="items" class="w-full lg:w-[25%]" />

        <!-- Product info -->
        <div class="w-full lg:w-[70%] pt-7 lg:pt-0">
          <h2
            class="text-4xl dark:text-slate-200 text-slate-800 font-semibold mb-4"
          >
            Shoes
          </h2>
          <h6 class="text-slate-800 dark:text-slate-200 text-lg">
            Vendor: Kimdir
          </h6>
          <h6 class="text-slate-800 dark:text-slate-200 text-lg">
            Deliver: 1 day
          </h6>

          <div class="pt-3">
            <h5 class="text-slate-800 dark:text-slate-200 text-md mb-1">
              Count:
            </h5>

            <div class="flex items-center gap-x-4 mb-3">
              <div
                class="border-2 border-gray-600 dark:border-slate-200 w-32 h-12 text-slate-700 dark:text-slate-100 flex items-center justify-between"
              >
                <button
                  class="hover:bg-gray-800 w-1/3 h-full hover:text-slate-100"
                >
                  <span class="inline-block text-2xl">-</span>
                </button>
                <span class="inline-block text-base w-1/3 text-center">1</span>
                <button
                  class="w-1/3 hover:bg-gray-800 h-full hover:text-slate-100"
                >
                  <span class="inline-block text-2xl">+</span>
                </button>
              </div>

              <h4>In stock: 55</h4>
            </div>
            
            <!-- Price -->
            <h4 class="text-2xl flex items-center gap-x-2">
              Price:<UBadge
                color="yellow"
                variant="subtle"
                label="99.999"
                size="lg"
              />
            </h4>

            <!-- Color -->
            <div class="space-x-2 pt-4">
              <UBadge color="yellow" variant="subtle" label="Yellow" />
              <UBadge color="primary" variant="subtle" label="Green" />
              <UBadge color="blue" variant="subtle" label="Blue" />
              <UBadge color="red" variant="subtle" label="Red" />
            </div>
            <!-- Size -->
            <div class="space-x-2 pt-3">
              <UButton color="lime" size="md" variant="solid" label="Xl" />
              <UButton color="lime" size="md" variant="solid" label="Xl" />
              <UButton color="lime" size="md" variant="solid" label="Xl" />
              <UButton color="lime" size="md" variant="solid" label="Xl" />
            </div>
            <div class="flex gap-x-2 pt-5">
              <UButton
                class="w-1/2 h-10"
                size="lg"
                color="blue"
                label="Buy"
                block
              />
              <UButton
                class="w-1/2 h-10"
                size="lg"
                icon="i-heroicons-shopping-bag"
                color="blue"
                variant="outline"
                label="Save"
                block
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <UTabs :items="tabs" class="shadow-lg"/>
        <div>
          <p class="text-slate-800 dark:text-slate-100 text-justify hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus asperiores ratione vero aut magni molestias, eos illum, harum magnam nisi rerum! Aspernatur quidem, officiis est consectetur rerum, magni expedita quasi tenetur esse necessitatibus, distinctio harum exercitationem veniam impedit? Quod optio repellat maxime eveniet. Unde dolores ea earum laborum amet vel, consequuntur rem cupiditate. Voluptate voluptatem, sint labore eligendi et ut officiis omnis consequatur quam modi unde asperiores quia excepturi consequuntur similique vitae rem expedita aliquid nisi rerum. Animi reiciendis ullam nostrum vitae mollitia facilis aspernatur maxime commodi, aut placeat fuga soluta incidunt itaque perspiciatis nemo delectus dolorem necessitatibus. Nam debitis pariatur vero facere, voluptatem veritatis error rerum sit ipsam cupiditate ipsa commodi vitae maiores architecto tempore autem eligendi blanditiis dolore sint sequi neque ratione beatae placeat sed! Quis suscipit quidem cum, incidunt sint at ratione. Maxime explicabo ea omnis autem, non dolor optio iusto ipsum ab rerum velit accusamus molestiae quas aspernatur facere dolorum vero aliquid hic veritatis. Adipisci, hic. Harum accusamus ipsa ipsam temporibus? Nesciunt, corrupti incidunt. Adipisci sit hic necessitatibus enim sequi possimus temporibus. Cum praesentium ex corporis officiis at, pariatur aperiam eum! Fugit voluptas rem unde ea impedit laboriosam consequatur veniam culpa. Expedita rem quisquam ad reiciendis, obcaecati odit voluptatibus tempora corrupti quia fugit iste eius similique praesentium excepturi qui dignissimos esse, vel accusamus a alias. Ipsa pariatur odit ducimus quidem nulla, facilis blanditiis velit atque sed quisquam? Soluta tenetur eum officia debitis natus sapiente ullam, pariatur doloremque, delectus qui hic perspiciatis dolore esse eveniet? Quaerat, voluptatibus tenetur. Aut culpa ullam fugiat illo nobis sed ipsum, minima ad! Beatae error numquam sit voluptates maxime autem hic rerum ullam, necessitatibus repellendus reprehenderit eveniet vel voluptate incidunt doloribus quasi nemo ex tenetur cupiditate consectetur, alias modi? Dolore similique vel blanditiis provident voluptatibus obcaecati aut deserunt quod ratione? In tempore quisquam cupiditate! Nobis praesentium quam tempore qui autem! Quo sequi, sit molestiae sint labore est quaerat eveniet dicta soluta incidunt obcaecati velit sed suscipit inventore expedita blanditiis beatae unde tempora deserunt distinctio vel facilis rerum. Similique ullam quod facilis quisquam eos ducimus non aperiam optio, nostrum dolor delectus, dolore cum reprehenderit. Itaque in ullam doloremque nihil reiciendis perspiciatis quo repellat corrupti odit iure accusamus, ipsam illo nemo similique, voluptate consectetur expedita harum iusto dolore molestias, quas ut illum tenetur nisi. Explicabo eligendi mollitia consequuntur impedit, quo possimus accusamus quam ratione, reprehenderit architecto repudiandae molestias ipsa, consequatur minus debitis molestiae labore.</p>

          <div class="pt-4 pb-10">
            <div v-for="item in 10" :key="item" class="bg-[rgba(255,255,255,0.5)] w-[600px] mx-auto min-h-20 mb-4 last:mb-0 rounded-2xl shadow-md px-7 py-4">
              <div class="flex items-center gap-x-2">
                <h2 class="bg-slate-300 inline-block p-2 rounded-full">SM</h2>
                <h4 class="text-sm text-slate-900 font-semibold">Samandar Mirzarakhmonov</h4>
              </div>
              <p class="text-sm pt-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto in alias distinctio, suscipit ipsam praesentium omnis. Repudiandae reiciendis tenetur velit?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
