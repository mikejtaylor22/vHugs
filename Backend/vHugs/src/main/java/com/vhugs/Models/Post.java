package com.vhugs.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
public class Post {
    @Id
    @GeneratedValue
    private Long id;

    private String subject;
    private String body;
    private Integer hugs;

    @ManyToMany
    private Collection<Reply> replies;

    public Post(String subject, String body,Reply...replies) {
        this.subject = subject;
        this.body = body;
        this.replies = List.of(replies);
        this.hugs = 0;
    }

    public Post() {
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Collection<Reply> getReplies() {
        return replies;
    }

    public void addRepliesToPost(Reply reply) {
        replies.add(reply);
    }

    public Integer getHugs() {
        return hugs;
    }

    public void setHugs(Integer hug) {
        this.hugs = hug;
    }
    public void addHug(){
        this.hugs +=1;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Post{" +
                "subject='" + subject + '\'' +
                ", body='" + body + '\'' +
                ", hugs=" + hugs +
                ", replies=" + replies +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Post post = (Post) o;

        if (id != null ? !id.equals(post.id) : post.id != null) return false;
        if (subject != null ? !subject.equals(post.subject) : post.subject != null) return false;
        if (body != null ? !body.equals(post.body) : post.body != null) return false;
        return replies != null ? replies.equals(post.replies) : post.replies == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (subject != null ? subject.hashCode() : 0);
        result = 31 * result + (body != null ? body.hashCode() : 0);
        result = 31 * result + (replies != null ? replies.hashCode() : 0);
        return result;
    }
}
