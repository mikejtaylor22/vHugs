package com.vhugs;

import com.vhugs.Models.Post;
import com.vhugs.Models.Reply;
import com.vhugs.Repos.PostRepository;
import com.vhugs.Repos.ReplyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {
    @Autowired
    private PostRepository postRepo;

    @Autowired
    private ReplyRepository replyRepo;

    @Override
    public void run(String... args) throws Exception {
        Reply firstReply = new Reply("Hang in there!");
        Reply secondReply = new Reply("Sending you hugs!");
        replyRepo.save(firstReply);
        replyRepo.save(secondReply);
        Post firstPost = new Post("This bootcamp is hard!","The Bootcamp is really hard! I am struggling to learn TDD",firstReply);
        Post secondPost = new Post("My Car Brokedown today!","I am not sure how I will get to work without a car! It is so expensive to fix",secondReply);
        postRepo.save(firstPost);
        postRepo.save(secondPost);
    }
}
