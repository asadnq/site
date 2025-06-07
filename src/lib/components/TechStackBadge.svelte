<script lang="ts">
	import { cn } from '$lib/utils/ui';
	import { cva } from 'class-variance-authority';

	const badgeVariants = cva('bg-surface-50-950 text-surface-950-50 rounded border-2 border-surface-950-50 font-bold', {
		variants: {
			size: {
				xs: 'px-1.5 py-0.5 text-xs',
				sm: 'px-2 py-0.5 text-sm',
				md: 'px-3 py-1 text-base',
				lg: 'px-4 py-1.5 text-lg'
			}
		},
		defaultVariants: {
			size: 'md'
		}
	});

	interface Props {
		name: string;
		size?: 'sm' | 'md' | 'lg' | 'xs';
		className?: string;
	}

	let data: Props = $props();

	const { name, className, size = 'md' } = data;
</script>

<span class={cn(badgeVariants({ size }), className)}>
	{name}
</span>
