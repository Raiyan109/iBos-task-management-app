import { createContext } from "react";

export const LoginContext = createContext()

const value = {
    test: "test"
}

const LoginProvider = ({ children }) => {
    return (
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;