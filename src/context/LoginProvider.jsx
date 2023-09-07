import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";




export const LoginContext = createContext()



const LoginProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const auth = getAuth(app)

    // const signUp = (email, password) => {
    //     createUserWithEmailAndPassword(auth, email, password)

    // }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("Auth", currentuser);
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((err) => {
                console.error('Firebase Logout Error:', err);
            });
    }

    const value = {
        user,
        logOut
    }

    return (
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;