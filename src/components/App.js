import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip.">
        <h2 className="tooltiptext" style={{ cursor: 'pointer'}}> Hover over me. </h2>
      </Tooltip>
      
      <br /><br />

      <Tooltip text="This is another tooltip.">
      <p className="tooltiptext" style={{ cursor: 'pointer'}}> Hover me to see another tooltip. </p>
      </Tooltip>
    </div>
  );
};

export default App;
