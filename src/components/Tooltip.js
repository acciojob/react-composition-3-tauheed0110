import React, { useState } from 'react';
import '../styles/App.css';

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div>
      <div className='tooltip'
      onMouseEnter={showTooltip} 
      onMouseLeave={hideTooltip}
    >
      {children}
    </div>
      {visible && <div className='tooltiptext'>{text}</div>}
    </div>
  );
};

export default Tooltip;
