import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedInState, setLoggedInState] = useState(false);

    return (
        <AuthContext.Provider value={{ loggedInState, setLoggedInState }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
