import React from 'react';
import WidgetOptions from "./WidgetOptions"

function Widget() {
    return (
    
            <div className="widget">
                <div className="widget-header widget-content">
                    <h5>Spaces to follow</h5>
                </div>
                <div className="widget-content">
                    <WidgetOptions />
                </div>      
            </div>
        
    )
}

export default Widget;
