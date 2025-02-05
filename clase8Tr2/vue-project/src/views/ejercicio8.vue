<!-- • Crea un componente Counter.vue.
• Declara count = ref<number>(0).
• Crea una propiedad computada estadoContador que retorne:
– "Positivo" si count > 0.
– "Cero" si count === 0.
– "Negativo" si count < 0.
• Muestra count y estadoContador en el template.
• Agrega botones para incrementar y decrementar el contador. -->
<template>


    <p>Tu mensaje es: {{ estadocContador }}</p>
    <p>Tu contador es: {{ count }}</p>

    <button @click="count--">menos</button>
    <button @click="count++">mas</button>
</template>


<script setup lang="ts">

import { ref ,computed} from 'vue'
  let mensaje = ref<string>("cero");

  const count = ref<number>(0)

  const max = () => {
    count.value++
  }
  const min = () => {
    count.value--
  }
  const estadocContador = computed(()=>{
    if(count.value === 0){
        return "cero"
    }else if(count.value > 0){
        return "positivo"
    }else{
        return "negativo"
    }
  })

</script>


<style lang="scss" scoped>
</style>