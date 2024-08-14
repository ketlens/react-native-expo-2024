import { createContext, useEffect, useState, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
const [user, setUser] = useState({});

const signIn= async ({ email, password }) => {
setUser({ id: 1, name: "usuário 1", email });
};

const signOut = async () => {
setUser({});
};

useEffect(() => {
    console.log('AuthProvider: ', user);
    }, user)
    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthProvider);
    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
}