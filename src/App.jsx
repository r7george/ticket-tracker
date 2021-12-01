import './App.scss';

import Header from './components/Header/Header';
import CardContainer from './components/CardContainer/CardContainer';

function App() {
  return (
    <div className="App">
      <Header text="Ticket Tracker" />
      <CardContainer />
    </div>
  );
}

export default App;
