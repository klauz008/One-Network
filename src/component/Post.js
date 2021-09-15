import { Avatar } from '@material-ui/core';
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineOutlined, MoreHorizOutlined, RepeatOutlined, ShareOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import "../css/Post.css";
import { selectQuestionId, setQuestionInfo } from "../features/questionSlice";
import Modal from 'react-modal';
import db from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase';
import { selectUser } from '../features/userSlice';


function Post({id, question,image,timestamp,oneNetworkUser}) {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const[ modalIsOpen, setModalIsOpen]= useState(false);
    const questionId = useSelector(selectQuestionId);
    const [answer, setAnswer] = useState("");
    const [getAnswers, setGetAnswers] = useState([]);

    useEffect(() => {
        if (questionId) {
          db.collection("question")
            .doc(questionId)
            .collection("answer")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
              setGetAnswers(
                snapshot.docs.map((doc) => ({ id: doc.id, answers: doc.data() }))
              )
            );
        }
    }, [questionId]);

    const handleAnswer = (e) => {
        e.preventDefault();
    
        if (questionId) {
          db.collection("questions").doc(questionId).collection("answer").add({
            user: user,
            answer: answer,
            questionId: questionId,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
        }
        console.log(questionId);
        setAnswer("");
        setModalIsOpen(false);
      };


    return (
        <div 
            className="post"
            onClick={() =>
            dispatch(
            setQuestionInfo({
                questionId: id,
                questionName: question,
            })
            )}
        >
            <div className="post-info">
               <Avatar 
               src = {oneNetworkUser.photo}
               />
               <h5> {oneNetworkUser.displayName ? oneNetworkUser.displayName: oneNetworkUser.email} </h5>
               <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            </div> 
            <div className="post-body">
                <div className="post-question">
                    <p>{question}</p>
                    <button className="post-btnAnswer" onClick={() => setModalIsOpen(true)}>Drop an Answer</button>
                    <Modal
                isOpen = {modalIsOpen}
                onRequestClose = {()=> setModalIsOpen(false)}
                shouldCloseOnOverlayClick={false}
                style={{
                    overlay: {
                    width: 700,
                    height: 600,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    zIndex: "1000",
                    top: "50%",
                    left: "50%",
                    marginTop: "-300px",
                    marginLeft: "-350px",
                    },
                }}>
                    <div className="modal__question">
                        <h1>Answer</h1>
                        <p>
                            asked by <span className="name">{user.displayName ? user.displayName : user.email}</span> {""} on <span className="name"> {new Date(timestamp?.toDate()).toLocaleString()}</span>
                        </p> 
                    </div>   

                    <div className="modal__answer"> 
                        <textarea 
                        type= "text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Enter your Answer" />
                    </div>
                    <div className="modal__button">
                        <button className="cancel" onClick = {()=>setModalIsOpen(false)}>Cancel</button>  
                        <button type= "submit" className="add" onClick={handleAnswer} >Answer</button>
                    </div>
                </Modal>
                </div>
                <div className="post-answer">
                    <p></p>
                </div>
                <img src={image} alt="" srcset="" />
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





   