import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

export class post{
  constructor(
    public subject:string,
    public body:string
  ){}
}

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
subject:string;
body:string;
myPost:post;
  constructor(public postService:PostService,private router:Router) { }

  ngOnInit(): void {
  }

  addPost(){
    
    this.myPost = new post(this.subject,this.body);
    console.log(this.myPost)
    this.postService.addPost(this.myPost).subscribe(data=>{
      console.log(data);
      this.router.navigate(['post'])
    })
   
  }
}
