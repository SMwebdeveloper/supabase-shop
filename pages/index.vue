<script setup lang="ts">
import { supabase } from "~/libs/supabase";
import Card from "../components/shared/card.vue";

const handleClick = (e: any) => {
  // selected.value = e;
  // console.log(selected.value);
};
onMounted(async () => {
  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session);

    if (event === "INITIAL_SESSION") {
      // handle initial session
    } else if (event === "SIGNED_IN") {
      // handle sign in event
    } else if (event === "SIGNED_OUT") {
      // handle sign out event
    } else if (event === "PASSWORD_RECOVERY") {
      // handle password recovery event
    } else if (event === "TOKEN_REFRESHED") {
      // handle token refreshed event
    } else if (event === "USER_UPDATED") {
      // handle user updated event
    }
  });
  console.log(data)
});
</script>

<template>
  <section>
    <div class="max-w-[1200px] w-full mx-auto px-6 lg:px-0">
      <div class="pt-4 w-full flex animation-scroll space-x-3 mb-3">
        <UButton
          v-for="item in 18"
          :key="item"
          class="snap-start"
          color="blue"
          variant="outline"
          @click="handleClick(item)"
          label="Shorts"
        />
      </div>
      <div
        class="grid gap-x-2 gap-y-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <Card/>
      </div>
    </div>
  </section>
</template>
<style scoped>
.animation-scroll {
    overflow-y:scroll ;
}
.animation-scroll::-webkit-scrollbar{
    width: 0;
}
</style>