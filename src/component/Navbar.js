import React from 'react';
import HomeIcon from "@material-ui/icons/Home"
import { CodeOutlined, GamepadOutlined, Language, NotificationsOutlined, PeopleAltOutlined, Search, SportsOutlined } from '@material-ui/icons';
import { Avatar, Button } from '@material-ui/core';
import "../css/Navbar.css"


function Navbar() {
    return (
        <div className="oHeader">
            <div className="oHeader-logo">
                <img src="logo.svg" alt="" />
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
                    <Avatar/>
                </div>
                <Language/>
                <Button>Ask a Question</Button>
            </div>
            
        </div>
    )
}

export default Navbar;
