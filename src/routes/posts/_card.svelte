<script lang="ts">
  import type { IPost } from '../../services/post.model';
  import { PostState } from './state.svelte';
  // let {a}: IPost = $props(); // yse this for premitive types
  // old way! export let post: IPost;

  let { post, wipe }: { post: IPost, wipe?: any } = $props();


  const s = new PostState();

  s.up();

  _attn(s.value);

  const doWipe = () => {
    wipe('newvalue');
  }


</script>

<div>
  Here is a partial component.

  {post.a}

  <button class="btn-rev" onclick={doWipe}>Wipe</button>
</div>
