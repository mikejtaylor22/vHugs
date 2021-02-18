import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PostService} from '../../services/post.service';
import {postResponse} from '../../Models/postResponse';
import { postResults } from 'src/app/Models/postResults';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
posts:postResults;

  constructor(public postService: PostService,private router:Router) { }

  ngOnInit(): void {
    // this.postService.getAllPosts().subscribe(
    //   (post:any) => {
      
    //     this.posts = post;
      
    //   }
    // )
    this.getAllPosts();
  }

  goToSinglePost(id){
    // this.postService.getSinglePost(id).subscribe(
    //   (post:any) =>{
       

    //     this.postService.setSinglePost(post);
        
    //   }
    // )
    this.postService.setId(id);
    this.router.navigate(['singlepost']);
  }
  addPost(){
    this.router.navigate(['addpost']);
  }

  addHug(id){
    this.postService.addHug(id).subscribe(data=>{
      console.log(data);
      this.getAllPosts();
    })
  }

  getAllPosts(){
    this.postService.getAllPosts().subscribe(
      (post:any) => {
      
        this.posts = post;
     
      }
    )
  }

}
