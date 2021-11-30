import './App.scss';
import EmployeeInfo from './components/EmployeeInfo/EmployeeInfo';

function App() {
  return (
    <div className="App">
      <h1 className="main-heading">Ticket Tracker</h1>

      <EmployeeInfo employeeName="Reuben George" employeeRole="Junior Software Developer" />
    </div>
  );
}

export default App;
