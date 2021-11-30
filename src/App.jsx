import './App.scss';

import Header from './components/Header/Header';

import EmployeeCard from "./components/EmployeeCard/EmployeeCard";

function App() {
  return (
    <div className="App">
      
      <Header />
      <EmployeeCard employeeName="Reuben George" employeeRole="Junior Software Developer" />
    </div>
  );
}

export default App;
