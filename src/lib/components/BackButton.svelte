<script lang="ts">
	import { ArrowLeftIcon } from '@lucide/svelte';

	function goBack() {
		history.back();
	}
</script>

<button
	on:click={goBack}
	type="button"
	class="box-sm bg-background text-foreground fill-foreground clickable-1"
>
	<ArrowLeftIcon />
</button>
