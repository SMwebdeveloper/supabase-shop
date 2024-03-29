<script setup lang="ts">
import { supabase } from "~/libs/supabase";
import type { FormError } from "#ui/types";

const toast = useToast();
const router = useRouter()
const state = ref({
  email: "",
  password: "",
});
const visibleAlert = ref(false);
const alertMessage = ref("");

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email)
    errors.push({ path: "email", message: "Email is required" });
  if (!state.password)
    errors.push({ path: "password", message: "Password is required" });
  return errors;
};

const onSubmit = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: state.value.email,
      password: state.value.password,
    });
    if (error) {
      throw new Error(error.message);
    } else {
        toast.add({
            title: 'Logged in',
			description: 'You are now logged'
        })
       await  router.push('/')
    }
  } catch (error: any) {
    visibleAlert.value = true;
    alertMessage.value = error.message;
  }
  if (visibleAlert.value) {
    setInterval(() => {
      visibleAlert.value = false;
    }, 4000);
  }
};
</script>

<template>
  <UForm
    ref="form"
    :validate="validate"
    :state="state"
    @submit="onSubmit"
    class="w-[300px] mx-auto bg-slate-200 dark:bg-cyan-800 p-5 rounded-lg shadow-lg space-y-2"
  >
    <UAlert
      color="red"
      variant="subtle"
      icon="i-heroicons-command-line"
      v-if="visibleAlert"
      :description="alertMessage"
    />
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton color="blue" :loading="false" type="submit"> Submit </UButton>
  </UForm>
</template>
