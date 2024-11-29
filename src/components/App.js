
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        <Tooltip tip1={"This is tooltip."} tip2= {"This is another tooltip."}/>
    </div>
  )
}

export default App
