import './App.css';
import Header from './components/header/header';
import NotesContentContainer from './components/notes-content/notes-content-container';
import SummaryTableContainer from './components/notes-content/summary-table-popup/summary-table-container';

const App = (props) => {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <NotesContentContainer />
        <SummaryTableContainer />
      </div>
    </div>
  );
}

export default App;
