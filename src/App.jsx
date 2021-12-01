import './App.scss';

import team from "./data/team";

import Header from './components/Header/Header';
import CardContainer from './components/CardContainer/CardContainer';

function App() {
  return (
    <div className="App">
      <Header text="Ticket Tracker" />
      <CardContainer teamArr={team} />
    </div>
  );
}

export default App;
