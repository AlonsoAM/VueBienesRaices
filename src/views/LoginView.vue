<script setup>
import { useForm, useField } from "vee-validate";
import { loginSchema as validationSchema } from "../validation/loginSchema";
import { useAuthStore } from "../stores/auth";

const { handleSubmit } = useForm({ validationSchema });

const auth = useAuthStore();

const email = useField("email");
const password = useField("password");

const submit = handleSubmit((values) => {
  auth.login(values);
});
</script>

<template>
  <v-card flat max-width="600" class="mx-auto my-10">
    <v-card-title
      class="text-h4 font-weight-bold text-center"
      tag="h4"
      primary-title
    >
      Iniciar Sesión
    </v-card-title>
    <v-card-subtitle class="text-h5 font-weight-bold text-center">
      Inicia sesión con tu cuenta
    </v-card-subtitle>
    <v-alert
      v-if="auth.hasError"
      class="my-5"
      type="error"
      :title="auth.errorMsg"
    ></v-alert>
    <v-form class="mt-5">
      <v-text-field
        type="email"
        name="email"
        label="Email"
        bg-color="blue-grey-lighten-5"
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        class="mb-3"
      ></v-text-field>
      <v-text-field
        type="password"
        name="password"
        label="Password"
        bg-color="blue-grey-lighten-5"
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
        class="mb-3"
      ></v-text-field>
      <v-btn block color="pink-accent-3" @click="submit">Iniciar Sesion</v-btn>
    </v-form>
  </v-card>
</template>
