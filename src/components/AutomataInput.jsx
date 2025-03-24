import React, { useState } from "react";

const AutomataInput = ({ onAutomataSubmit }) => {
  const [alphabet, setAlphabet] = useState("");
  const [states, setStates] = useState("");
  const [initialState, setInitialState] = useState("");
  const [finalStates, setFinalStates] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAutomataSubmit({
      alphabet: alphabet.split(","),
      states: states.split(","),
      initialState,
      finalStates: finalStates.split(","),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Alfabeto (separado por comas):</label>
        <input
          type="text"
          value={alphabet}
          onChange={(e) => setAlphabet(e.target.value)}
        />
      </div>
      <div>
        <label>Estados (separados por comas):</label>
        <input
          type="text"
          value={states}
          onChange={(e) => setStates(e.target.value)}
        />
      </div>
      <div>
        <label>Estado Inicial:</label>
        <input
          type="text"
          value={initialState}
          onChange={(e) => setInitialState(e.target.value)}
        />
      </div>
      <div>
        <label>Estados Finales (separados por comas):</label>
        <input
          type="text"
          value={finalStates}
          onChange={(e) => setFinalStates(e.target.value)}
        />
      </div>
      <button type="submit">Guardar Autómata</button>
    </form>
  );
};

export default AutomataInput;