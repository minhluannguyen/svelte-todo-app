<script>
    import { todoList } from "./store"

    let content;

    function handleSubmit() {
        if (!content)
            return;

        todoList.update( currentList => {
            return [
                ...currentList,
                {
                    id: currentList.length + 1,
                    content
                }
            ]
        });

        content = "";
    }
</script>

<form on:submit|preventDefault={handleSubmit} >
    <input type="text" bind:value={content} />
    <button type="submit">Click</button>
</form>