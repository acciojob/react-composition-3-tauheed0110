import React, { useState } from 'react';
import '../styles/App.css';

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <h2 
      className="tooltip" 
      onMouseEnter={showTooltip} 
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && <div className="tooltiptext">{text}</div>}
    </h2>
  );
};

export default Tooltip;
