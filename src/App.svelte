<script>
	import Form from "./components/Form.svelte";
	import ItemList from "./components/ItemList.svelte";

	
</script>

<main>
	<h1>Todo List</h1>
	<Form />
	<ItemList />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>