import './App.scss';
// import team from "./data/team";
import TicketSection from './components/TicketSection/TicketSection';

function App() {
  return (
    <div className="App">
      <h1 className="main-heading">Ticket Tracker</h1>

      <TicketSection />
    </div>
  );
}

export default App;
