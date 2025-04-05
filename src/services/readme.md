<!-- routify:meta _draft=true -->

shared amongst services and models, or folders that can have similar objects

Interfaces are ISomething, classes are Something (unless it's a reserved keyword)
Saved in `something.model.ts`

```ts

// post.model.ts
export interface IPost {
  id: string;
}

export class Post {

}
```

Services are `SomethingService`, in `something.service.ts`
Method names should unclude service name, to be findable, `GetSomethings` `GetSomething` `CreateSomething`

```ts
// post.service.ts
export class PostService {
  GetPosts() {

  }
  GetPost(id) {

  }
  CreatePost(post) {
    
  }
}
```
