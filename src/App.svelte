<script module lang="ts">
  import { Router, createRouter, goto } from '@roxi/routify';
  import routes from '../.routify/routes.default';

</script>

<script lang="ts">


  export const router = createRouter(
    {
      routes,
      beforeUrlChange: ({ route }) => {
        _attn(route, 'beforeUrlChange');
        //   // check if user is authenticated
        if (route.meta && route.meta['_protected']) {
          const isAuthenticated = () => {
            return !!localStorage.getItem('authToken');
          };
          if (!isAuthenticated()) {
            localStorage.setItem('redirectUrl', route.url);
            // reroute to login page
            $goto('/login');
            return false; // Prevent navigation
          }
        }
        return true;
      },
    },
    // may be later
    // urlRewrite: {
    //     toExternal: url => `/en${url}`, // Add locale prefix
    //     toInternal: url => url.replace(/^\/en/, ''), // Remove locale prefix BULLSHIT!
    // },
  );


</script>

<Router {router} />
