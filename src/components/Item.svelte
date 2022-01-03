<script>
    import { todoList } from "./store";
    import { fly, fade } from "svelte/transition"

    export let todo;
    const {content, id} = todo;

    function handleDelete(id) {
        todoList.update(currentList => {
            return currentList.filter(item => item.id !== id);
        })
    }
</script>

<div in:fade out:fly={{x: 200, duration: 500}} class="card">
    <div class="num-display">{id}</div>
    <button class="close" on:click={() => handleDelete(id)}>X</button>
    <p class="content">{content}</p>
</div>

<style>
    .card {
        background-color: rgb(62, 44, 224);
        color: #333;
        border-radius: 15px;
        padding: 40px 50px;
        margin: 20px 0;
        position: relative;
    }
    .num-display {
      position: absolute;
      top: -10px;
      left: -10px;
      width: 50px;
      height: 50px;
      background: #ff6a95;
      color: #fff;
      border: 1px #eee solid;
      border-radius: 50%;
      padding: 10px;
      text-align: center;
      font-size: 19px;
    }
  
    .close {
      position: absolute;
      top: 10px;
      right: 20px;
      cursor: pointer;
      background: none;
      border: none;
      color: #eee;
    }

    .content {
        color: #eee;
    }
</style>