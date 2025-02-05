<!-- • Crea un componente ToggleMessage.vue con <script lang="ts"
setup>.
• Declara un ref<boolean> llamado mostrarMensaje y asígnale un
valor inicial true.
• Usa un botón para alternar el valor de mostrarMensaje.
• Renderiza un texto (ej. "¡Hola, Vue!") únicamente cuando
mostrarMensaje sea true. -->
<script setup lang="ts">
import { ref } from 'vue';

const mostrarMensaje = ref(false);

const toggleMensaje = () => {
  mostrarMensaje.value = !mostrarMensaje.value;
};
</script>

<template>
  <button @click="toggleMensaje">Alternar mensaje</button>

  <p v-if="mostrarMensaje">¡Hola, Vue!</p>

</template>

<style lang="scss" scoped>

</style>
