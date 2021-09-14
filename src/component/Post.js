import { Avatar } from '@material-ui/core';
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineOutlined, MoreHorizOutlined, RepeatOutlined, ShareOutlined } from '@material-ui/icons';
import React from 'react';
import "../css/Post.css";

function Post() {
    return (
        <div className="post">
            <div className="post-info">
               <Avatar />
               <h5>Username</h5>
               <small>Timestamp</small>
            </div> 
            <div className="post-body">
                <div className="post-question">
                    <p>Question</p>
                    <button className="post-btnAnswer">Drop an Answer</button>
                </div>
                <div className="post-answer">
                    <p></p>
                </div>
                <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" srcset="" />
            </div>
            <div className="post-footer">
                <div className="post-footerAction">
                    <ArrowUpwardOutlined />
                    <ArrowDownwardOutlined />
                </div>
                <RepeatOutlined />
                <ChatBubbleOutlineOutlined />
                <div className="post-footerRight">
                    <ShareOutlined />
                    <MoreHorizOutlined />

                </div>
            </div>
        </div>
    )
}

export default Post
