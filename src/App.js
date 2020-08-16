import React from 'react';
import Jitsi from './components/jitsi/jitsi.component'



//need to import dnd provider to wrap anything that will possibly use drag and drop interface
import { DndProvider } from 'react-dnd';
//have to pass a backend to it, here is where we switch out for the combo one later
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  

  return (
    <DndProvider backend={HTML5Backend}>

      <div style={{ display: "flex"}}>

      <Jitsi />
        <div>
        
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
