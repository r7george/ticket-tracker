import React from "react";
import "./CardContainer.scss";
import team from "../../data/team";

import EmployeeCard from "../EmployeeCard/EmployeeCard";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";

const CardContainter = () => {
  const names = team.map((person) => {
    return person.name;
  });
  const roles = team.map((person) => {
    return person.role;
  });

  for (let i = 0; i < names.length; i++) {
    return <EmployeeCard employeeName={names[i]} employeeRole={roles[i]} />;
  }
}

export default CardContainter;