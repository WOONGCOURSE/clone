import React from "react";
import Nav from "./Nav/Nav";
import Pid from "./Pid/Pid";
import Story from "./Story/Story";
function App() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div>
        <Story />
      </div>
      <div>
        <Pid />
      </div>
    </>

  );
}

export default App;
