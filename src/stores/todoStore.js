import { defineStore } from "pinia";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc
} from "firebase/firestore";
import { db } from "../firebase";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: []
  }),
  actions: {
    async fetchTodos() {
      const querySnapshot = await getDocs(collection(db, "todos"));
      this.todos = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    },
    async addTodo(todo) {
      await addDoc(collection(db, "todos"), todo);
      this.fetchTodos();
    },
    async deleteTodo(id) {
      await deleteDoc(doc(db, "todos", id));
      this.fetchTodos();
    },
    async updateTodo(id, updated) {
      await updateDoc(doc(db, "todos", id), updated);
      this.fetchTodos();
    }
  }
});
