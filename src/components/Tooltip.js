import React, { useState } from 'react';



const Tooltip = ({ tip1, tip2 }) => {
    const [mouseEnterH, setMouseEnterH] = useState(false);
    const [mouseEnterP, setMouseEnterP] = useState(false);

    return (
        <div>
            <div style={{ visibility: mouseEnterH ? "visible" : "hidden"}} className="tooltip">{tip1}</div>
            <h2 className="tooltiptext" onMouseEnter={() => setMouseEnterH(true)} onMouseLeave={()=>setMouseEnterH(false)}>Hover over me</h2>
            <div style={{ visibility: mouseEnterP ? "visible" : "hidden"}} className="tooltip">{tip2}</div>
            <p className="tooltiptext" onMouseEnter={() => setMouseEnterP(true)} onMouseLeave={()=>setMouseEnterP(false)}>Hover me to see another tooltip.</p>
        </div>
    );
}

export default Tooltip;
