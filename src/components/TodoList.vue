<template>
    <ul class="todo-list">
        <li v-for="todo in store.todos" :key="todo.id" class="todo-item">
            {{ todo.text }}
            <button @click="store.deleteTodo(todo.id)" class="delete-button">Delete</button>
        </li>
    </ul>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTodoStore } from '../stores/todoStore'

const store = useTodoStore()

onMounted(() => {
    store.fetchTodos()
})
</script>