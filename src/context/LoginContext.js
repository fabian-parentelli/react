import { createContext, useContext, useState } from "react";

const MOCK_USER = [
    {
        email: 'profe@Coder.com',
        password: '1234'
    },
    {
        email: 'correo@correo.com',
        password: '1234'
    }
];

export const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {

    const [user, setUser] = useState({ email: '', logged: false, error: null });

    const login = (values) => {
        const match = MOCK_USER.find(user => user.email === values.email && user.password === values.password);
        if (match) setUser({ email: match.email, logged: true, error: null });
        else setUser({ email: null, logged: false, error: 'Los datos son inválidos' });
    };

    const logout = () => setUser({ email: '', logged: false, error: null });

    return (
        <LoginContext.Provider value={{ user, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
};