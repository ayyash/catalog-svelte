

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
      "id": "_default_dashboard",
      "name": "dashboard",
      "module": false,
      "file": {
        "path": "src/routes/dashboard",
        "dir": "src/routes",
        "base": "dashboard",
        "ext": "",
        "name": "dashboard"
      },
      "children": [
        {
          "meta": {
            "isDefault": true
          },
          "id": "_default_dashboard_index_svelte",
          "name": "index",
          "file": {
            "path": "src/routes/dashboard/index.svelte",
            "dir": "src/routes/dashboard",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/dashboard/index.svelte'),
          "children": []
        }
      ]
    },
    {
      "meta": {
        "isDefault": true
      },
      "id": "_default_index_svelte",
      "name": "index",
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "asyncModule": () => import('../src/routes/index.svelte'),
      "children": []
    },
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
      "meta": {
        "_protected": true
      },
      "id": "_default_posts",
      "name": "posts",
      "file": {
        "path": "src/routes/posts/_module.svelte",
        "dir": "src/routes/posts",
        "base": "_module.svelte",
        "ext": ".svelte",
        "name": "_module"
      },
      "asyncModule": () => import('../src/routes/posts/_module.svelte'),
      "children": [
        {
          "meta": {
            "dynamic": true,
            "order": false
          },
          "id": "_default_posts__id__svelte",
          "name": "[id]",
          "file": {
            "path": "src/routes/posts/[id].svelte",
            "dir": "src/routes/posts",
            "base": "[id].svelte",
            "ext": ".svelte",
            "name": "[id]"
          },
          "asyncModule": () => import('../src/routes/posts/[id].svelte'),
          "children": []
        },
        {
          "meta": {
            "noRoute": true
          },
          "id": "_default_posts__card_svelte",
          "name": "_card",
          "file": {
            "path": "src/routes/posts/_card.svelte",
            "dir": "src/routes/posts",
            "base": "_card.svelte",
            "ext": ".svelte",
            "name": "_card"
          },
          "asyncModule": () => import('../src/routes/posts/_card.svelte'),
          "children": []
        },
        {
          "meta": {
            "noRoute": true
          },
          "id": "_default_posts__form_svelte",
          "name": "_form",
          "file": {
            "path": "src/routes/posts/_form.svelte",
            "dir": "src/routes/posts",
            "base": "_form.svelte",
            "ext": ".svelte",
            "name": "_form"
          },
          "asyncModule": () => import('../src/routes/posts/_form.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_posts_create_svelte",
          "name": "create",
          "file": {
            "path": "src/routes/posts/create.svelte",
            "dir": "src/routes/posts",
            "base": "create.svelte",
            "ext": ".svelte",
            "name": "create"
          },
          "asyncModule": () => import('../src/routes/posts/create.svelte'),
          "children": []
        },
        {
          "meta": {
            "isDefault": true
          },
          "id": "_default_posts_index_svelte",
          "name": "index",
          "file": {
            "path": "src/routes/posts/index.svelte",
            "dir": "src/routes/posts",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/posts/index.svelte'),
          "children": []
        },
        {
          "meta": {
            "_draft": true
          },
          "id": "_default_posts_readme_md",
          "name": "readme",
          "file": {
            "path": "src/routes/posts/readme.md",
            "dir": "src/routes/posts",
            "base": "readme.md",
            "ext": ".md",
            "name": "readme"
          },
          "asyncModule": () => import('../src/routes/posts/readme.md'),
          "children": []
        }
      ]
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