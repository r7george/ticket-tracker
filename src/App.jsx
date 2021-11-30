import './App.scss';
import team from "./data/team";

import Header from './components/Header/Header';
import CardContainer from './components/CardContainer/CardContainer';
import EmployeeCard from './components/EmployeeCard/EmployeeCard';

function App() {
  const names = team.map((person) => {
    return person.name;
  });
  const roles = team.map((person) => {
    return person.role;
  });

  console.log(names);
  console.log(roles);
  return (
    <div className="App">
      <Header />
      {team.map((person) => {
        {return <EmployeeCard employeeName={person.name} employeeRole={person.role}/>}
      })}
    </div>
  );
}

export default App;
