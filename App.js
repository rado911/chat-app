import React from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Contact from './components/Contact';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Contact image="https://randomuser.me/api/portraits/women/15.jpg"
          alt="Marry Poppins"
          name="Marry Poppins"
          status="Online" />
        <Contact image="https://randomuser.me/api/portraits/men/60.jpg"
        alt="Hey Dude"
        name="Leslie Perez"
        status="Online"/>
        <Contact image="https://randomuser.me/api/portraits/women/93.jpg"
        alt="Marcia Palmer"
        name="Marcia Palmer"
        status="Online"/>
      </header>
    </div>
  );
}

export default App;
