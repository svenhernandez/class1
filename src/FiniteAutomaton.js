class FiniteAutomaton {
    constructor() {
        this.initial = "";
        this.finalStates = [];
        this.transitions = {};
        this.errorState = "-"; // Definimos un estado de error especial
    }

    addTransition(fromState, symbol, toState) {
        this.transitions[fromState] ??= {};
        this.transitions[fromState][symbol] ??= [];
        this.transitions[fromState][symbol].push(toState);
    }

    /**
     * Obtiene todos los estados alcanzables con transiciones épsilon (ε)
     */
    getEpsilonClosure(state, visited = new Set()) {
        if (visited.has(state) || state === this.errorState) return visited;
        visited.add(state);

        const epsilonTransitions = this.transitions[state]?.["ε"] || [];
        for (const nextState of epsilonTransitions) {
            this.getEpsilonClosure(nextState, visited);
        }

        return visited;
    }

    /**
     * Evalúa si una cadena es aceptada por el autómata, considerando transiciones ε y estados de error.
     */
    evaluateStr(str, currentStates = this.getEpsilonClosure(this.initial), currentIndex = 0) {
        if (currentIndex >= str.length) {
            return [...currentStates].some(state => this.finalStates.includes(state));
        }

        let nextStates = new Set();

        for (const state of currentStates) {
            if (state === this.errorState) continue; // Si llegamos al estado de error, lo ignoramos

            const possibleTransitions = this.transitions[state]?.[str[currentIndex]] || [];
            for (const nextState of possibleTransitions) {
                if (nextState === this.errorState) return false; // Si entramos en el estado de error, detener evaluación
                const closure = this.getEpsilonClosure(nextState);
                closure.forEach(s => nextStates.add(s));
            }
        }

        return nextStates.size > 0 && this.evaluateStr(str, nextStates, currentIndex + 1);
    }

    setInitialState(state) {
        this.initial = state;
    }

    setFinalStates(states) {
        this.finalStates = states;
    }
}

export default FiniteAutomaton;
