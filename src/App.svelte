<script module lang="ts">
  import { Router, createRouter } from '@roxi/routify';
  import routes from '../.routify/routes.default';
</script>


<script lang="ts">
  export const router = createRouter({
    routes,
    // may be later
    // urlRewrite: {
    //     toExternal: url => `/en${url}`, // Add locale prefix
    //     toInternal: url => url.replace(/^\/en/, ''), // Remove locale prefix BULLSHIT!
    // },
  });
</script>

<Router {router} />
