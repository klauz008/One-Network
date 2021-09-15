import React, { useEffect, useState } from 'react';
import "../css/Feed.css";
import db from '../firebase';
import OneNetworkBox from "./OneNetworkBox";
import Post from './Post';

function Feed() {


    const [posts, setPosts] = useState([]);

    // useEffect(()=> {
    //     db.collection("questions").orderBy("timestamp", "desc").onSnapshot(snapshot=>setPosts(snapshot.docs.map((doc)=>(({
    //         id:doc.id,
    //         questions: doc.data()
    //     })))))
    // },[])
    useEffect(() => {
        db.collection("question")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) =>
            setPosts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                questions: doc.data(),
              }))
            )
          );
      }, []);
    
    return (
        
        <div className="feed">
            <OneNetworkBox />
            {
                posts.map(({id,questions}) => (
                    <Post
                    key = {id}
                    id = {id}
                    image = {questions.imageUrl}
                    question = {questions.question}
                    timestamp = {questions.timestamp}
                    oneNetworkUser = {questions.user}
                    />
                ))
            } 
            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
        </div>
        
    )
}

export default Feed;
