import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {postResponse} from '../Models/postResponse';
import {postResults} from '../Models/postResults';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  singlePost:postResults;
  id:number;
  constructor(private http:HttpClient) { }

  getAllPosts():Observable<postResults>{
    return this.http.get<postResults>(`http://localhost:8080/posts`)
  }

  getSinglePost(postId){
    return this.http.get<postResults>(`http://localhost:8080/${postId}/post`)
  }

  setSinglePost(post){
    this.singlePost = post;
  }

  getSinglePostData(){
    return<postResults> this.singlePost;
  }

  addPost(post){
    return this.http.post(`http://localhost:8080/posts`,post);
  }

  getId(){
    return this.id;
  }
  setId(id){
    this.id = id;
  }

  addHug(id){
      return this.http.get(`http://localhost:8080/${id}/addHug`)
  }
}
