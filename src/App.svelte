<script module lang="ts">
  import { Router, createRouter } from '@roxi/routify';
  import routes from '../.routify/routes.default';
</script>

<script lang="ts">
  export const router = createRouter({ routes });
  _attn('f');
</script>

<Router {router} />
