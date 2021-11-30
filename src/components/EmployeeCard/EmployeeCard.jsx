import './EmployeeCard.scss';
import React from "react";

import TicketSection from '../TicketSection/TicketSection';
import EmployeeInfo from '../EmployeeInfo/EmployeeInfo';

const EmployeeCard = ({employeeName, employeeRole}) => {
  return (
    <div className="card">
      <EmployeeInfo employeeName={employeeName} employeeRole={employeeRole} />
      <TicketSection />
    </div>
  )
}

export default EmployeeCard;