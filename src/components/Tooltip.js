import React, { useState } from 'react';



const Tooltip = ({ tip1, tip2 }) => {
    const [mouseEnterH, setMouseEnterH] = useState(false);
    const [mouseEnterP, setMouseEnterP] = useState(false);

    return (
        <div>
            <h2 className='tooltip' style={{ display: mouseEnterH ? "block": "none"}}>
                <div>{tip1}</div>
            </h2>
            <h2 onMouseEnter={() => setMouseEnterH(true)} onMouseLeave={()=>setMouseEnterH(false)}>Hover over me</h2>
            <p className='tooltip' style={{ display: mouseEnterP ? "block": "none"}}>
                <div>{tip2}</div>
            </p>
            <p onMouseEnter={() => setMouseEnterP(true)} onMouseLeave={()=>setMouseEnterP(false)}>Hover me to see another tooltip.</p>
        </div>
    );
}

export default Tooltip;
