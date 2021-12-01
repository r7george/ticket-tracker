import './EmployeeCard.scss';
import React from "react";

import TicketSection from '../TicketSection/TicketSection';

const EmployeeCard = ({employeeName, employeeRole}) => {
  return (
    <div className="card">
      <div className="card__info">
        <h3 className="card__employeeName">{employeeName}</h3>
        <h5 className="card__employeeRole">{employeeRole}</h5>
      </div>
      <TicketSection />
    </div>
  )
}

export default EmployeeCard;