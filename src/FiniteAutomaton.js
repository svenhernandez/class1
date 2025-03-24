class FiniteAutomaton {
    constructor() {
      this.initial = "";
      this.finalStates = [];
      this.transitions = {};
    }
  
    addTransition(fromState, symbol, toState) {
      this.transitions[fromState] ??= {};
      this.transitions[fromState][symbol] ??= [];
      this.transitions[fromState][symbol].push(toState);
    }
  
    evaluateStr(str, currentState = this.initial, currentIndex = 0) {
      if (currentIndex >= str.length) {
        return this.finalStates.includes(currentState);
      }
  
      const possibleTransitions = this.transitions[currentState]?.[str[currentIndex]] || [];
  
      return possibleTransitions.some((nextState) =>
        this.transitions[nextState] && this.evaluateStr(str, nextState, currentIndex + 1)
      );
    }
  
    setInitialState(state) {
      this.initial = state;
    }
  
    setFinalStates(states) {
      this.finalStates = states;
    }
  }
  
  export default FiniteAutomaton;