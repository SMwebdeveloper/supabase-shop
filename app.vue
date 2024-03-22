<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://kazteqzyokqgjdyidhpn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthenRlcXp5b2txZ2pkeWlkaHBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExMzIxNTYsImV4cCI6MjAyNjcwODE1Nn0.Ab8fC542j2-Ctsv4FhefNh6B6J5t39zNv5HtdLK2HbU"
);
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
