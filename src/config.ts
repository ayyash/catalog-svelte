// export config

export const Config = {
  isServed: false,
  Basic: {
    defaultRoute: '/',
    defaultSize: 25,
    defaultDateFormt: 'DD-MM-YYYY',
    defaultUploadSize: 1048576,
    defaultUploadFormat: ['gif', 'jpg', 'jpeg', 'png'],
    defaultToastTimeout: 5000,
    lockTimeout: 100

  },
  Res: {
    languages: [{ name: 'en', display: 'English' }, { name: 'ar', display: 'عربي' }],
    defaultLanguage: 'en',
    cookieName: 'ct-lang'
  },
  Auth: {
    userAccessKey: 'catalog.user',
    redirectKey: 'redirectUrl',
    loginRoute: '/login',
  },
  Cache: {
    Timeout: 1,
    Key: 'catalog.cache',
    ResetKey: 'catalog.20250101'
  },
  API: {
    rootPath: '__root__',
    rootSpace: 'management',
    apiRoot: '',
    apiVersion: 1,
    data: {
      notdefined: '/data/notdefined'
    },
    auth: {
      login: '/user/login',
      sendCode: '/user/login',
    },
    profile: {
      details: '/user/profile',
      save: '/user/profile',
    }

    , space: {
      // query
      list: '/managed/query',
      details: '/managed/entry/space/Ayyash/__root__/Ayyash',
      create: '/managed/space', // POST, valvet, needs to go
    }
    , resource: {
      query: '/managed/query',
      details: '/managed/entry/:resource/:space/:subpath?:options', // :shortname not needed
      create: '/managed/request', // POST
      save: '/managed/request', // PUT
      delete: '/managed/request', // DELETE
    }
    , post: {
      list: '/posts/?:options',
      details: '/posts/:id',
      create: '/posts', // POST
      save: '/posts/:id', // PUT
      delete: '/posts/:id', // DELETE
    }

    , comment: {
      list: '/posts/:id/comments',
      replies: '/posts/:id/comments/:cid/replies',
      create: '/posts/:id/comments', // POST
      reply: '/posts/:id/comments/:cid/replies', // POST
      delete: '/comments/:id', // DELETE
      vote: '/posts/:id/votes' // POST
    }

    , vote: {
      change: '/posts/:id/votes', // POST
    }
    , stat: {
      tags: '/stats' // whats to add here?
    }
    , notification: {
      list: '/notifications',
      count: '/notifications/count', // GET
      delete: '/notifications/:id', // DELETE
      clear: '/notifications/clear', // POST
      mark: '/notifications/mark', // POST
    }
    // , account: {
    //   details: '/account',
    //   posts: '/account/posts', // GET
    //   save: '/account', // PUT
    // }
    // **gulpmodel**
  }
};

