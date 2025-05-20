<template>
    <form @submit.prevent="handleAdd">
        <input v-model="text" placeholder="New Todo" />
        <button type="submit">Add</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../stores/todoStore'

const text = ref('')
const store = useTodoStore()

function handleAdd() {
    if (text.value.trim()) {
        store.addTodo({ text: text.value })
        text.value = ''
    }
}
</script>