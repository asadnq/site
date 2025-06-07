<script lang="ts">
	import { ArrowLeftIcon } from '@lucide/svelte';

	function goBack() {
		history.back();
	}
</script>

<button
	on:click={goBack}
	type="button"
	class="box-sm bg-surface-50-950 text-surface-950-50 fill-surface-950-50 clickable-1-xs"
>
	<ArrowLeftIcon />
</button>
