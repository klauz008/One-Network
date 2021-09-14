import { Avatar } from '@material-ui/core';
import React from 'react';
import "../css/OneNetworkBox.css";

function OneNetworkBox() {
    return (
        <div className="OneNetworkBox">
           <div className="OneNetworkBox-info">
               <Avatar/>
               <h5>Username</h5>
           </div>
           <div className="OneNetworkBox-network">
               <p>what's on your mind right now?</p>
           </div>
        </div>
    )
}

export default OneNetworkBox
