<script setup lang="ts">
import { supabase } from "~/libs/supabase";
useHead({ title: "Supabase-shop" });

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
});
</script>
<template>
  <LayoutNavbar />
  <section class="bg-slate-100 dark:bg-slate-700 min-h-[87vh]">
    <slot />
  </section>
</template>
