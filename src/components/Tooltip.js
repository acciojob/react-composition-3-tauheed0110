import React, { useState } from 'react';



const Tooltip = ({ tip1, tip2 }) => {
    const [mouseEnterH, setMouseEnterH] = useState(false);
    const [mouseEnterP, setMouseEnterP] = useState(false);

    return (
        <div>
            <h2 style={{ display: mouseEnterH ? "block": "none"}} className="tooltip">{tip1}</h2>
            <h2 className="tooltiptext" onMouseEnter={() => setMouseEnterH(true)} onMouseLeave={()=>setMouseEnterH(false)}>Hover over me</h2>
            <p style={{ display: mouseEnterP ? "block": "none"}} className="tooltip">{tip2}</p>
            <p className="tooltiptext" onMouseEnter={() => setMouseEnterP(true)} onMouseLeave={()=>setMouseEnterP(false)}>Hover me to see another tooltip.</p>
        </div>
    );
}

export default Tooltip;
