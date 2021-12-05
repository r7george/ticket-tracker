import './EmployeeCard.scss';
import React from "react";

import TicketSection from '../TicketSection/TicketSection';

const EmployeeCard = ({employeeName, employeeRole}) => {
  return (
    <div className="employee-card">
      <div className="employee-card__info">
        <h3 className="employee-card__employeeName">{employeeName}</h3>
        <h5 className="employee-card__employeeRole">{employeeRole}</h5>
      </div>
      <TicketSection />
    </div>
  )
}

export default EmployeeCard;