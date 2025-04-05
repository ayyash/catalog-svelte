<script lang="ts">
  import { goto, url } from '@roxi/routify';
  import { onMount } from 'svelte';

  const isAuthenticated = () => {
    return !!localStorage.getItem('authToken');
  };

  onMount(() => {

    if (!isAuthenticated()) {

      localStorage.setItem('redirectUrl', JSON.stringify($url));
      // reroute to login page
        $goto('/login');
        return false; // Prevent navigation
      }
      return true;

  })
  export const CanView = () => {
  }
  // beforeUrlChange(async ({ url, params, node }) => {
  //   if (node?.meta?.canView) {
  //     return true; // Allow navigation
  //   } else {
  //     return false; // Prevent navigation
  //   }
  // });

  // Add a route guard
  // $beforeUrlChange(({route}) => {
  //   // _attn(isAuthenticated(), 'auth');
  //   // _attn(x.route, 'context');
  //     if (route.meta && route.meta['_protected']) {
  //         const isAuthenticated = () => {
  //           return !!localStorage.getItem('authToken');
  //         };
  //         if (!isAuthenticated()) {
  //           localStorage.setItem('redirectUrl', route.url);
  //           // reroute to login page
  //           $goto('/login');
  //           return false; // Prevent navigation
  //         }
  //       }
  //   return true; // Allow navigation
  // });
</script>
