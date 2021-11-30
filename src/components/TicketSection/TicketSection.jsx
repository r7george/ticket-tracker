import './TicketSection.scss';
import React from "react";

import Counter from '../Counter/Counter';

const TicketSection = () => {
  return ( 
    <div className="tickets">
      <h3 className="tickets__heading">Tickets</h3>
      <Counter />
    </div>
  )
}

export default TicketSection;