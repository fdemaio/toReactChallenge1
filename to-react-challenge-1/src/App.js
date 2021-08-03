import React from 'react';


import Title from './components/Title/Title';
import About from './components/About/About';
import Target from './components/Target/Target';
import Members from './components/Members/Members';
import Resources from './components/Resources/Resources';
import Fundamentals from './components/Fundamentals/Fundamentals';
import AdvancedTopics from './components/AdvancedTopics/AdvancedTopics';


import './components/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <div>
        <About />
        <Target />
        <Members />
        <Resources />
        <Fundamentals />
        <AdvancedTopics />
      </div>
    </div>
  );
}

export default App;
