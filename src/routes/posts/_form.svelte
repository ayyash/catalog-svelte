<script lang="ts">
  import type { IPost } from '../../services/post.model';
  import type { IViewMode } from '../../utils/view.model';

  let { mode = { forNew: true }, post }: { mode?: IViewMode, post?: IPost } = $props();
  let formState = $state({
    title: post?.title,
    stage: 0,
  });


  _attn(mode.forNew, 'fornew');
</script>

<main>
  <h5 class="f5">Stage: {formState.stage}</h5>
  {#if mode.forNew}
    New
  {:else}
    Edit
  {/if}
  <div class="spaced">

    <input type="text" id="title" bind:value={formState.title} placeholder="Title" class="cr-input w100" />

    <div>
      <button class="btn-rev" onclick={ () => {formState.stage ++;} }>Save</button>
    </div>
  </div>

</main>
