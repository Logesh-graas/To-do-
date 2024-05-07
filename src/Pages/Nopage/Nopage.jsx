import React from "react";
import './Nopage.scss'

const Nopage= () =>
{
    return(
        <div className="nopage-body">
            <span className="error-msg bd">Error</span>
        <span className="error-msg">Page Not Found</span>
        </div>
    );
}

export default Nopage;