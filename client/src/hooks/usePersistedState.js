import { useState } from "react";

export default function usePersistedState (key,initialState){
    const [state, setState] = useState(() => {
        const persistedAuth = localStorage.getItem(key);

        if (!persistedAuth) {
            return typeof initialState === 'function' 
            ? initialState()
            : initialState;
        }

        const authData = JSON.parse(persistedAuth);

        return authData;
    
});
  
    const newState = (value) => {
        const updateState = typeof value === 'function'
        ? value(state)
        : value;

        localStorage.setItem(key, JSON.stringify(value));

        setState(updateState);

    }

    return [state, newState];
}