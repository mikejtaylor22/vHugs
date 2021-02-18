package com.vhugs.Services;

import com.vhugs.Exceptions.ResourceNotFoundException;
import com.vhugs.Models.Post;
import com.vhugs.Models.Reply;
import com.vhugs.Repos.PostRepository;
import com.vhugs.Repos.ReplyRepository;
import org.springframework.stereotype.Service;

@Service
public class PostService {
    private PostRepository postRepo;
    private ReplyRepository replyRepo;

    public PostService(PostRepository postRepo, ReplyRepository replyRepo) {
        this.postRepo = postRepo;
        this.replyRepo = replyRepo;
    }

    public Post retrievePostById(Long id) {
        try {
            return postRepo.findById(id).get();
        } catch (Exception e) {
            throw new ResourceNotFoundException("Requested resource " + id + " not found.", e);
        }
    }

    public Post addReplyToPost( Reply newReply,Long id){
         Post postToMod = retrievePostById(id);
        replyRepo.save(newReply);
         postToMod.addRepliesToPost(newReply);
         postRepo.save(postToMod);
         return retrievePostById(id);
    }
}
