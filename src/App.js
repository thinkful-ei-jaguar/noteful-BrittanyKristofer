import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Main from './Main';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar>
        <Route path="/" render={props => <Sidebar {...props} folders={props.STORE.folders} />} />
        <Route path="/folder/:folderid" render={props => <Sidebar {...props} folders={props.STORE.folders} />} />
        <Route path="/note/:noteid" component={Sidebar} />
      </Sidebar>
      <Main>
        <Route path="/" render={props => <Main {...props} STORE={STORE} />} />
        <Route path="/folder/:folderid" render={props => <Main {...props} STORE={STORE} />} />
        <Route path="/note/:noteid" render={props => <Main {...props} STORE={STORE} />} />
      </Main>
    </div>
  );
}

export default App;
