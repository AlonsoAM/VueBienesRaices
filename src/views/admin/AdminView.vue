<script setup>
import usePropiedades from "@/composables/usePropiedades";
const { propiedadesCollection, priceProperty } = usePropiedades();
</script>
<template>
  <h2 class="text-center text-h3 font-weight-bold my-5">Admin Panel</h2>
  <v-btn color="blue" variant="flat" :to="{ name: 'admin-nueva-propiedad' }">
    Nueva Propiedad
  </v-btn>
  <v-card class="mx-auto mt-10" flat>
    <v-list>
      <v-list-item v-for="prop in propiedadesCollection" :key="prop.id">
        <template v-slot:prepend>
          <v-list-item-media start="true">
            <v-img :src="prop.imagen" width="180"></v-img>
          </v-list-item-media>
        </template>
        <v-list-item-title>{{ prop.titulo }}</v-list-item-title>
        <v-list-item-subtitle>{{
          priceProperty(prop.precio)
        }}</v-list-item-subtitle>
        <template v-slot:append>
          <v-btn
            color="info"
            variant="flat"
            class="mr-2"
            :to="{ name: 'admin-editar-propiedad', params: { id: prop.id } }"
            >Editar</v-btn
          >
          <v-btn color="red-darken-3" variant="flat">Eliminar</v-btn>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>
