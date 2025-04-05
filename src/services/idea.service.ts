import { Config } from '../config';


export class PostService {

    private _listUrl = Config.API.post.list;
    private _detailsUrl = Config.API.post.details;
    private _createUrl = Config.API.post.create;
    private _saveUrl = Config.API.post.save;
    private _deleteUrl = Config.API.post.delete;


    GetPosts(options: any = {}): Observable<IList<IPost>> {
        
    }



}
