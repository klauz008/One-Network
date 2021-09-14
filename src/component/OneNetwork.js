import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Feed from './Feed';
import "../css/OneNetwork.css";
import Widget from "./Widget";

function OneNetwork() {
    return (
        <div className= "oneNetwork">
         <Navbar/>
         <div className="onNetwork-content">
          <Sidebar/> 
          <Feed />  
          <Widget />
         </div>     
        </div>
    )
}

export default OneNetwork;
