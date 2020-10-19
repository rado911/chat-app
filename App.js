import React from 'react';
import Contact from './components/Contact'
import ContactList from './components/ContactList'


const user = {
  avatar: "https://randomuser.me/api/portraits/men/70.jpg",
  name: "Ray Nelson",
  online: false
}

function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/men/33.jpg"
        name="Marc Neal"
        online />
      <Contact
        avatar="https://randomuser.me/api/portraits/men/57.jpg"
        name="Armando Woods"
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/men/24.jpg"
        name="Ramon Ray"
        online />
      <Contact {...user} />
      <ContactList />
    </div>
  );
}



export default App;
