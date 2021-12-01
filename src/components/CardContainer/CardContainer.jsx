import React from "react";
import "./CardContainer.scss";
import team from "../../data/team";

import EmployeeCard from "../EmployeeCard/EmployeeCard";

const CardContainter = () => {
  return (
  <>
    <div className="container">
      {team.map((person, index) => {
        return <EmployeeCard employeeName={person.name} employeeRole={person.role} key={`employee${index}`}/>
      })}
    </div>
  </>)
}

export default CardContainter;