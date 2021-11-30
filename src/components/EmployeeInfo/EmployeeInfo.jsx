import './EmployeeInfo.scss';
import React from "react";

const EmployeeInfo = ({employeeName, employeeRole}) => {
  return (
    <div className="card__info">
      <h3 className="card__employeeName">{employeeName}</h3>
      <h5 className="card__employeeRole">{employeeRole}</h5>
    </div>
  )
}

export default EmployeeInfo;