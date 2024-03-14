<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const registerPage = ref(false)
const state = reactive({
    email: undefined,
  name: undefined,
  password: undefined,
});

const form = ref();

async function onSubmit(event: FormSubmitEvent<any>) {
  form.value.clear();
  try {
    const response = await $fetch("...");
    // ...
  } catch (err) {
    if (err.statusCode === 422) {
      form.value.setErrors(
        err.data.errors.map((err) => ({
          // Map validation errors to { path: string, message: string }
          message: err.message,
          path: err.path,
        }))
      );
    }
  }
}
</script>

<template>
  <section class="h-[80vh]">
    <div
      class="max-w-[1200px] w-full mx-auto px-6 flex flex-col items-center justify-center h-full space-y-4"
    >
    <h2 v-if="registerPage" class="text-4xl font-medium">Sign in</h2>
    <h2 v-else class="text-4xl font-medium">Sign up</h2>
      <div>
          <h4 v-if="registerPage">Do you not have a profile? <UButton color="sky" variant="link" label="Sign up" @click="registerPage = false"/></h4>
        <h4 v-else>Do you have account? <UButton color="sky" variant="link" label="Sign in" @click="registerPage = true"/></h4>
      </div>
      <UForm
        ref="form"
        :state="state"
        @submit="onSubmit"
        class="w-[300px] mx-auto bg-slate-200 dark:bg-cyan-800 p-5 rounded-lg shadow-lg space-y-2"
      >
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup v-if="!registerPage" label="Name" name="text">
          <UInput v-model="state.name" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <UButton color="blue" :loading="false" type="submit"> Submit </UButton>
      </UForm>
    </div>
  </section>
</template>
