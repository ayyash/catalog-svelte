<script lang="ts">
  import Pager from '../../lib/Pager.svelte';
  import type { IPost } from '../../services/post.model';
  import { translate } from '../../utils/resources';
  import PostCard from './_card.svelte';


  let post: IPost = {a: 'ayyash', f: 'something'};

  const onWipe = (v) => {
      _attn(v);
    };

</script>

<div class="page">
  <div class="container">

    <div>

      <a class="btn" href="/posts/create">Create New</a>
    </div>

    {translate('hello world', 'INVALID_TOOSHORT')}

    <PostCard {post} wipe={onWipe}></PostCard>
    <Pager >
    <p>sdfsf</p>
    <!-- {#snippet f(name)}
      <span>s {name}</span>
    {/snippet} -->
      <a href="/posts/1">test </a>
    </Pager>
  </div>
</div>
