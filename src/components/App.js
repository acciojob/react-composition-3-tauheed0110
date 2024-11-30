import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip.">
        <h2 className="tooltip" style={{ cursor: 'pointer'}}> <div>Hover over me.</div> </h2>
      </Tooltip>
      
      <br /><br />

      <Tooltip text="This is another tooltip.">
      <p className="tooltip" style={{ cursor: 'pointer'}}> <div>Hover me to see another tooltip.</div> </p>
      </Tooltip>
    </div>
  );
};

export default App;
