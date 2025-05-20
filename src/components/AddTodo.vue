<template>
    <form @submit.prevent="handleAdd" class="add-form">
        <input v-model="text" placeholder="New Todo" class="input" />
        <button type="submit" class="button">Add</button>
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