import { mount } from 'svelte';
import App from './App.svelte';

if (import.meta.env.DEV){
  if (window) window['_indebug'] = true;
}
let localeFile;
async function loadLocaleFile(locale) {
    localeFile = await import(`./locale/cl-${locale}.js`);
}
// TODO: decide the locale file from a saved localStorage or cookie (for external hosts)

loadLocaleFile('en');

// this is how you pass global states!  but needs to be main.svelte.ts
// const props = $state({ foo: 'bar' });
// const app = mount(App, { target: document.getElementById("app"), props });

// use hydrate for ssr? or not?
const app = mount(App, {
  target: document.querySelector('#app'),
});

export default app

