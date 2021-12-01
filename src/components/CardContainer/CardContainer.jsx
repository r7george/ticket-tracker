import React from "react";
import "./CardContainer.scss";

import EmployeeCard from "../EmployeeCard/EmployeeCard";

const CardContainter = ({teamArr}) => {
  return (
  <>
    <div className="container">
      {teamArr.map((person, index) => {
        return <EmployeeCard employeeName={person.name} employeeRole={person.role} key={`employee${index}`}/>
      })}
    </div>
  </>)
}

export default CardContainter;