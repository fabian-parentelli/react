import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config.js';

export const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({ email: null, logged: false, error: null });

    const login = (values) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                setUser({ email: userCredential.user.email, logged: true, error: null });
            })
            .catch((error) => {
                setUser({ email: null, logged: false, error: error.message })
            })
            .finally(() => setLoading(false));
    };

    const logout = () => setUser({ email: null, logged: false, error: null });

    const register = (values) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                setUser({ email: userCredential.user.email, logged: true, error: null });
            })
            .catch((error) => {
                setUser({ email: null, logged: false, error: error.message })
            })
            .finally(() => setLoading(false));
    };

    return (
        <LoginContext.Provider value={{ user, login, logout, loading, register }}>
            {children}
        </LoginContext.Provider>
    );
};