import React from 'react';
import "../css/WidgetOptions.css"

function WidgetOptions() {
    return (
        <div className="widget-content">
            <div className="widget-content">
                <img src="https://images.unsplash.com/photo-1616803140344-6682afb13cda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFua2luZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className="widget-contentTitle">
                    <h5>Personal Banking</h5>
                    <p>All About Personal...</p>
                </div>
            </div>
            <div className="widget-content">
                <img src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className="widget-contentTitle">
                    <h5>Piggyvest by Sterling</h5>
                    <p>All About Piggyvest...</p>
                </div>
            </div>
        </div>
    )
}

export default WidgetOptions
