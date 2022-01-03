<script>
    import Item from "./Item.svelte";
    import { todoList } from "./store"

</script>

{#each $todoList as todo (todo.id)}
    <Item {todo} />
{/each}

