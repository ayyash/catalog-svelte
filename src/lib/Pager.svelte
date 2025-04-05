<script lang="ts">
  import type { Snippet } from 'svelte';

  let {children, f}: {children: Snippet, f?: Snippet<[string]>} = $props();
</script>

Pager here

{@render children()}

{#if f}
  {@render f('something')}
{/if}
