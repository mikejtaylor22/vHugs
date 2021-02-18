import { Component, OnInit } from '@angular/core';
import { postResponse } from 'src/app/Models/postResponse';
import { postResults } from 'src/app/Models/postResults';
import { PostService } from 'src/app/services/post.service';
import {ReplyService} from '../../services/reply.service';
import {replyData} from '../../Models/reply';

export class Reply{
  constructor(
    public message:string
  ){}
}

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {
 
singlePostData = {} as postResults;
myArray = [];
replies = {};
replyText:string;
id:number;
reply: Reply;
  constructor(public postService:PostService,public replyService:ReplyService) { }

  ngOnInit(): void {
    this.id = this.postService.getId();
    this.postService.getSinglePost(this.id).subscribe((singlePost =>{
      this.singlePostData = singlePost;
      this.myArray.push(this.singlePostData);
      
    }))
    this.replyService.getAllRepliesPerPost(this.id).subscribe(reply =>{
      
      console.log(reply);
      this.replies = reply;
      console.log(this.replies)
    })
    
  }

  addReply(){
    this.reply = new Reply(this.replyText);
    
    this.replyService.addReplyToData(this.id,this.reply).subscribe(data=>{
      console.log(data);
      this.getAllReplies();
    })
  }

  getAllReplies(){
    this.replyService.getAllRepliesPerPost(this.id).subscribe(reply =>{
      
      console.log(reply);
      this.replies = reply;
      console.log(this.replies)
    })
  }

}
