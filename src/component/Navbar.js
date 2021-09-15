import React, { useState } from 'react';
import HomeIcon from "@material-ui/icons/Home";
import { CodeOutlined, ExpandMore, Language, Link, NotificationsOutlined, PeopleAltOutlined, Search, SportsOutlined } from '@material-ui/icons';
import { Avatar, Button, Input} from '@material-ui/core';
import "../css/Navbar.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, { auth } from '../firebase';
import Modal from "react-modal";
import firebase from 'firebase';


Modal.setAppElement("#root");


function Navbar() {
    
    const user = useSelector(selectUser);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [inputUrl, setInputUrl] = useState("");


    const handleQuestion = (e)=> {
        e.preventDefault();
        setModalIsOpen(false);

        db.collection("question").add({
            question:input,
            imageUrl : inputUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user
        })
        setInput("");
        setInputUrl("");
    }
    return (
        <div className="oHeader">
            <div className="oHeader-logo">
                <img src="oneNetwork.svg" alt="" />
            </div>
            <div className="oHeader-icons">
                <div className="oHeader-icon">
                    <HomeIcon />
                </div>
                <div className="oHeader-icon">
                    <PeopleAltOutlined/>
                </div>
                <div className="oHeader-icon">
                    <CodeOutlined/>
                </div>
                <div className="oHeader-icon">
                    <SportsOutlined/>
                </div>
                <div className="oHeader-icon">
                    <NotificationsOutlined />
                </div>
            </div>
            <div className="oHeader-input">
                <Search/>
                <input type="text" placeholder="Search..." />
            </div>
            <div className="oHeader-rem">
                <div className="oHeader-avatar">
                    <Avatar onClick={() => auth.signOut()} src= {user.photo} />
                </div>
                <Language/>
                <Button onClick ={() => setModalIsOpen(true)}>Ask a Question</Button>
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
                    <div className="modal__title">
                        <h5>Ask a question</h5>
                        <h5>Share Link</h5>
                    </div>
                    <div className="modal__info">
                        <Avatar className = "avatar"
                        src ={user.photo ? user.photo : "https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} 
                        />
                        <p>{user.displayName ? user.displayName: user.email} asked</p>
                        <div className="modal__scope">
                            <PeopleAltOutlined />
                            <p>Public</p>
                            <ExpandMore />
                        </div>
                    </div> 
                    <div className="modal__Field">
                        <Input 
                        required
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        type="text"
                        placeholder="Ask your question here..."/>
                        <div className="modal__fieldLink">
                            <Link />
                            <input 
                            value={inputUrl}
                            onChange={(e)=>setInputUrl(e.target.value)}
                            type="text"
                            placeholder="Optional:link or Url to your question or work"/>
                        </div>
                    </div>
                    <div className="modal__buttons">
                        <button className="cancel" onClick = {()=>setModalIsOpen(false)}>Cancel</button>  
                        <button type= "submit" className="add" onClick = {handleQuestion}>Ask</button>
                    </div>
                </Modal>
            </div>
            
        </div>
    );
}

export default Navbar;
