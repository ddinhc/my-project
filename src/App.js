import React from 'react'
import Jumbotron from './Jumbotron'
import Main from './Main'

function App() {
  return (
    <div className="container-fluid">
        <Jumbotron heading="Welcome to Dinh's Home" description="Nothing is imposible if we try our best!" source="mailto:duy.dinhcs@gmail.com" cta="Contact Me" />
        <Main />
    </div>
  );
}

export default App;
