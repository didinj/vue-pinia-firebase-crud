<template>
    <ul>
        <li v-for="todo in store.todos" :key="todo.id">
            {{ todo.text }}
            <button @click="store.deleteTodo(todo.id)">Delete</button>
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