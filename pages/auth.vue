<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { supabase } from "~/libs/supabase";

useHead({ title: "Supabase-shop | Auth" });

const router = useRouter()
const registerPage = ref(false);
const state = reactive({
  email: '',
  name: undefined,
  lastName: undefined,
  password: '',
});

const  onSubmit = async (event: FormSubmitEvent<any>) => {
  if (!registerPage.value) {
    await supabase.auth.signUp({
      email: state.email,
      // name: `${state.name} ${state.lastName}`,
      password: state.password,
    }).then(() => {
      router.push('/')
    }).catch((error) => {
      console.log(error)
    })
    
  } else {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: state.email,
      password: state.password,
    }).then(() => {
      router.push('/')
    })

    console.log(error)
    console.log(data)
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
        <h4 v-if="registerPage">
          Do you not have a profile?
          <UButton
            color="sky"
            variant="link"
            label="Sign up"
            @click="registerPage = false"
          />
        </h4>
        <h4 v-else>
          Do you have account?
          <UButton
            color="sky"
            variant="link"
            label="Sign in"
            @click="registerPage = true"
          />
        </h4>
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
        <UFormGroup v-if="!registerPage" label="Last name" name="text">
          <UInput v-model="state.lastName" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <UButton color="blue" :loading="false" type="submit"> Submit </UButton>
      </UForm>
    </div>
  </section>
</template>
