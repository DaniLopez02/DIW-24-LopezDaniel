<!-- • Crea un componente TodoList.vue.
• Define una lista reactiva de tareas (ej. tasks = ref<string[]>(...)).
• Crea un campo de texto ligado a una variable newTask con vmodel.
• Implementa un botón “Agregar” que inserte newTask en tasks,
luego limpia newTask.
• Utiliza v-for para mostrar cada tarea en la lista. -->
<template>
    <div>
      <!-- Campo de texto para agregar nueva tarea -->
      <input 
        type="text" 
        v-model="newTask" 
        placeholder="Nueva tarea" 
      />
      
      <!-- Botón para agregar la tarea -->
      <button @click="addTask">Agregar</button>
      
      <!-- Mostrar lista de tareas -->
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          {{ task }}
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  

  const tasks = ref<string[]>([])
  

  const newTask = ref<string>('')
  
 
  const addTask = () => {
    if (newTask.value !== '') {
      tasks.value.push(newTask.value) 
      newTask.value = ''  
    }
  }
  </script>
  
  <style scoped>
  </style>
  