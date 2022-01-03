import { writable } from "svelte/store"

export const todoList = writable([
    {
        id: 1,
        content: "Ăn sáng",
    },
    {
        id: 2,
        content: "Ăn trưa",
    },
    {
        id: 3,
        content: "Ăn tối",
    },
]);