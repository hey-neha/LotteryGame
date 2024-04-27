import React, { useState } from "react";
import { genTicket, sum } from "./Helper";

const Lottery = () => {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinning = sum(ticket) == 15;

  let buyTicket = () => {
    setTicket(genTicket(3));
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      <div className="ticket">
        <span> {ticket[0]} </span>
        <span> {ticket[1]} </span>
        <span> {ticket[2]} </span>
      </div>
      <button style={{ margin: "20px" }} onClick={buyTicket}>
        Buy New Ticket
      </button>
      <h3>{isWinning && "Congratulations,you won!!"}</h3>
    </div>
  );
};

export default Lottery;
