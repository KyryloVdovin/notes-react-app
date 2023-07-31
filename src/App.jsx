import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import NotesContentContainer from './components/notes-content/notes-content-container';

const App = (props) => {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <NotesContentContainer />
      </div>
    </div>
  );
}

export default App;
