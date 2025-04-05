<script lang="ts">
  import Loader from '../lib/Loader.svelte';
</script>

<Loader />

<header class="header">
  <ul class="boxed row">
    <li><a href="/dashboard">Catalog</a></li>
    <li><a href="/posts">Ideas</a></li>
    <li><a href="/login">Login</a></li>
    <li><a href="/public">Public</a></li>
    <li class="lauto">notifications</li>
    <li>
      <a href="/account"><i class="liga">user</i></a>
    </li>
  </ul>
</header>

<!-- note: every folder has a _module that kicks in on route navigation, this is the layout, it must contain a slot -->

<slot />
