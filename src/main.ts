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


const app = mount(App, {
  target: document.body,
})

export default app

