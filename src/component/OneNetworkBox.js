import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import "../css/OneNetworkBox.css";
import { selectUser } from '../features/userSlice';

function OneNetworkBox() {
const user = useSelector(selectUser);

    return (
        <div className="OneNetworkBox">
           <div className="OneNetworkBox-info">
               <Avatar
               src={
                user.photo
                ? user.photo
                : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573" 
            }
               />
               <h5>{user.displayName ? user.displayName : user.email}</h5>
           </div>
           <div className="OneNetworkBox-network">
               <p>what's on your mind right now?</p>
           </div>
        </div>
    )
}

export default OneNetworkBox
