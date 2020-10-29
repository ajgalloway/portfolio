import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Resume from './views/Resume';
import Projects from './views/Projects';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HashRouter basename={'/portfolio'}>
        <Switch>
          <Route exact path='/'component={() => <Resume resume={data.resume}/>} />
          <Route exact path='/projects' component={() => <Projects projects={data.projects}/>} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
