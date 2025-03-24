import React, { useState } from "react";

const TransitionInput = ({ onTransitionSubmit }) => {
  const [fromState, setFromState] = useState("");
  const [symbol, setSymbol] = useState("");
  const [toState, setToState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onTransitionSubmit({ fromState, symbol, toState });
    setFromState("");
    setSymbol("");
    setToState("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Estado Actual:</label>
        <input
          type="text"
          value={fromState}
          onChange={(e) => setFromState(e.target.value)}
        />
      </div>
      <div>
        <label>Símbolo:</label>
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
      </div>
      <div>
        <label>Estado Siguiente:</label>
        <input
          type="text"
          value={toState}
          onChange={(e) => setToState(e.target.value)}
        />
      </div>
      <button type="submit">Agregar Transición</button>
    </form>
  );
};

export default TransitionInput;