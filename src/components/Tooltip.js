import React, { useState } from 'react';



const Tooltip = ({ tip1, tip2 }) => {
    const [mouseEnterH, setMouseEnterH] = useState(false);
    const [mouseEnterP, setMouseEnterP] = useState(false);

    const tip1Style = { display: mouseEnterH ? "block" : "none", backgroundColor: "red", color: "white", padding: "20px", maxWidth: "120px", borderRadius: "10px" };
    const tip2Style = { display: mouseEnterP ? "block" : "none", backgroundColor: "red", color: "white", padding: "20px", maxWidth: "120px", borderRadius: "10px" };

    return (
        <div>
            <div style={tip1Style}>{tip1}</div>
            <h1 style={{ margin: "2rem 0rem 4rem 0rem" }} onMouseEnter={() => setMouseEnterH(true)} onMouseLeave={() => setMouseEnterH(false)}>Hover me</h1>
            <div style={tip2Style}>{tip2}</div>
            <p onMouseEnter={() => setMouseEnterP(true)} onMouseLeave={() => setMouseEnterP(false)}>Hover me to see anoother tooltip.</p>
        </div>
    );
}

export default Tooltip;
