<script setup lang="ts">
import { supabase } from '~/libs/supabase';
import type { FormError } from '#ui/types'

const validate = (state: any): FormError[] => {
	const errors = []
	if (!state.name) errors.push({ path: 'name', message: 'Name is required' })
	if (!state.email) errors.push({ path: 'email', message: 'Email is required' })
	if (!state.password)
		errors.push({ path: 'password', message: 'Password is required' })
	return errors
}

const state = ref({
  email: "",
  name: "",
  lastName: "",
  password: "",
});
const onSubmit = async () => {
    try {
        const { data, error } = await supabase.auth.signUp({
            email: state.value.email,
            password: state.value.password
        })
        console.log(data)
        if(error) throw new Error('email missing')
    } catch (error:any) {
      console.log(error.message)
    }
}
</script>
<template>
  <UForm
    ref="form"
    :validate="validate"
    :state="state"
    @submit="onSubmit"
    class="w-[300px] mx-auto bg-slate-200 dark:bg-cyan-800 p-5 rounded-lg shadow-lg space-y-2"
  >
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Name" name="text">
      <UInput v-model="state.name" />
    </UFormGroup>
    <UFormGroup label="Last name" name="text">
      <UInput v-model="state.lastName" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton color="blue" :loading="false" type="submit"> Submit </UButton>
  </UForm>
</template>
