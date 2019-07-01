import React from 'react';
import OSE from './components/OSE'
import NAGW from './components/NAGW'
import EastsideProjects from './components/EastsideProjects'
import SummerCamp from './components/SummerCamp'
import AboutCV from './components/AboutCV'
import Menu from './components/Menu'
import Home from './components/Home'



function App() {
  return (
    <div className="App">
     
     <Menu />
     <Home />
     <AboutCV />
     <SummerCamp />
     <OSE />
     <NAGW />
     <EastsideProjects />
     
     
    
    </div>
  );
}

export default App;
