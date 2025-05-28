<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { MailIcon, GithubIcon, LinkedinIcon } from '@lucide/svelte/icons';

	const iconSize = 32;

	const contacts = [
		{
			href: 'mailto:n.asadalhaq@gmail.com',
			icon: MailIcon
		},
		{
			href: 'https://github.com/asadnq',
			icon: GithubIcon
		},
		{
			href: 'https://www.linkedin.com/in/asadnq/',
			icon: LinkedinIcon
		}
	];

	const iconClassName =
		'w-8 h-8 text-2xl font-bold hover:text-foreground/50 font-display duration-200 transition';

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
	{#each contacts as { href, icon: Icon }, i}
		<div style="transform: scale({scales[i].current}); opacity: {opacities[i].current}">
			<a {href} class={iconClassName}>
				<Icon width={iconSize} height={iconSize} />
			</a>
		</div>
	{/each}
</div>
