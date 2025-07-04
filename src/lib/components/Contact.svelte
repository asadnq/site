<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { onMount, type Component } from 'svelte';
	import { MailIcon, GithubIcon, LinkedinIcon } from '@lucide/svelte/icons';

	const iconSize = 32;

	type ContactId = 'email' | 'github' | 'linkedin';

	const contacts: { id: ContactId; href: string; icon: Component }[] = [
		{
			id: 'email',
			href: 'mailto:n.asadalhaq@gmail.com',
			icon: MailIcon
		},
		{
			id: 'github',
			href: 'https://github.com/asadnq',
			icon: GithubIcon
		},
		{
			id: 'linkedin',
			href: 'https://www.linkedin.com/in/asadnq/',
			icon: LinkedinIcon
		}
	];

	const iconContainerClassNames: Record<ContactId, string> = {
		github:
			'bg-green-200 hover:bg-green-800 text-green-800 hover:text-green-200 dark:bg-green-800 dark:text-green-200 dark:hover:bg-green-200 dark:hover:text-green-800',
		linkedin:
			'bg-blue-200 hover:bg-blue-800 text-blue-800 hover:text-blue-200 dark:bg-blue-800 dark:text-blue-200 dark:hover:bg-blue-200 dark:hover:text-blue-800',
		email:
			'bg-orange-200 hover:bg-orange-800 text-orange-800 hover:text-orange-200 dark:bg-orange-800 dark:text-orange-200 dark:hover:bg-orange-200 dark:hover:text-orange-800'
	};

	// Create a tweened value for each contact animation
	const scales = contacts.map(() => Tween.of(() => 1.5, { duration: 300, easing: cubicOut }));
	const opacities = contacts.map(() => Tween.of(() => 0, { duration: 300, easing: cubicOut }));

	// Animate on mount
	onMount(() => {
		contacts.forEach((_, i) => {
			setTimeout(() => {
				scales[i].set(1);
				opacities[i].set(1);
			}, 100 * i); // Delay each item by 100ms
		});
	});
</script>

<div class="flex w-full flex-row items-center justify-center gap-8">
	{#each contacts as { href, icon: Icon, id }, i (id)}
		<a
			{href}
			style="transform: scale({scales[i].current}); opacity: {opacities[i].current}"
			class="clickable-2-xs border-surface-950-50 flex size-9 items-center justify-center border-2 {iconContainerClassNames[
				id
			]} rounded-md p-1"
		>
			<Icon width={iconSize} height={iconSize} />
		</a>
	{/each}
</div>
