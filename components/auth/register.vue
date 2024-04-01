<script setup lang="ts">
import { supabase } from "~/libs/supabase";
import type { FormError } from "#ui/types";
const state = ref({
  email: "",
  firstName: "",
  lastName: "",
  password: "",
});
const visibleAlert = ref({
  errorMes: false,
  doneMes: false,
});
const alertMessage = ref("");

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.firstName)
    errors.push({ path: "name", message: "Name is required" });
  if (!state.lastName)
    errors.push({ path: "lastName", message: "Last name is required" });
  if (!state.email)
    errors.push({ path: "email", message: "Email is required" });
  if (!state.password)
    errors.push({ path: "password", message: "Password is required" });
  return errors;
};

const onSubmit = async () => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: state.value.email,
      password: state.value.password,
      options: {
        first_name: state.value.firstName,
        last_name: state.value.lastName,
      },
    });

    if (data.user) {
      visibleAlert.value.doneMes = true;
      alertMessage.value =
        "We have sent a message to your email to verify your profile, please confirm the message.";
      await supabase.from("users").insert({
        email: state.value.email,
        first_name: state.value.firstName,
          last_name: state.value.lastName,
        
      });
    } else {
    }
    if (error) throw new Error("email or password missing");
  } catch (error: any) {
    visibleAlert.value.errorMes = true;
    alertMessage.value = error.message;
  }
  if (visibleAlert.value.doneMes || visibleAlert.value.errorMes) {
    setInterval(() => {
      visibleAlert.value.doneMes = false;
      visibleAlert.value.errorMes = false;
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
      color="sky"
      variant="subtle"
      icon="i-heroicons-command-line"
      v-if="visibleAlert.doneMes"
      :description="alertMessage"
    />
    <UAlert
      color="red"
      variant="subtle"
      icon="i-heroicons-command-line"
      v-if="visibleAlert.errorMes"
      :description="alertMessage"
    />
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Name" name="name">
      <UInput v-model="state.firstName" />
    </UFormGroup>
    <UFormGroup label="Last name" name="lastName">
      <UInput v-model="state.lastName" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton color="blue" :loading="false" type="submit"> Submit </UButton>
  </UForm>
</template>
