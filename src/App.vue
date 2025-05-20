<template>
  <div class="app-container">
    <h1 class="title">Vue 3 + Pinia + Firebase Todo App</h1>
    <AddTodo />
    <TodoList />
  </div>
</template>

<script setup>
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'
</script>