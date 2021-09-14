import React from 'react';
import "../css/Feed.css";
import OneNetworkBox from "./OneNetworkBox";
import Post from './Post';

function Feed() {
    return (
        <div>
            <div className="feed">
                <OneNetworkBox />
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default Feed;
