

export const routes = {
  "meta": {},
  "id": "_default",
  "name": "",
  "file": {
    "path": "src/routes/_module.svelte",
    "dir": "src/routes",
    "base": "_module.svelte",
    "ext": ".svelte",
    "name": "_module"
  },
  "asyncModule": () => import('../src/routes/_module.svelte'),
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_login_svelte",
      "name": "login",
      "file": {
        "path": "src/routes/login.svelte",
        "dir": "src/routes",
        "base": "login.svelte",
        "ext": ".svelte",
        "name": "login"
      },
      "asyncModule": () => import('../src/routes/login.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_posts",
      "name": "posts",
      "module": false,
      "file": {
        "path": "src/routes/posts",
        "dir": "src/routes",
        "base": "posts",
        "ext": "",
        "name": "posts"
      },
      "children": []
    },
    {
      "meta": {},
      "id": "_default_public",
      "name": "public",
      "module": false,
      "file": {
        "path": "src/routes/public",
        "dir": "src/routes",
        "base": "public",
        "ext": "",
        "name": "public"
      },
      "children": [
        {
          "meta": {
            "isDefault": true
          },
          "id": "_default_public_index_svelte",
          "name": "index",
          "file": {
            "path": "src/routes/public/index.svelte",
            "dir": "src/routes/public",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/public/index.svelte'),
          "children": []
        }
      ]
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true,
        "order": false,
        "inline": false
      },
      "name": "[...404]",
      "file": {
        "path": ".routify/components/[...404].svelte",
        "dir": ".routify/components",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => import('./components/[...404].svelte'),
      "children": []
    }
  ]
}
export default routes