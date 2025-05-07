import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../Utilis/Utilis";



export const authentication = createContext();
const AuthProvider = ({children}) => {

    // create user with email or password
    const createUserEmailPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    // loginemailPassword
    const loginEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }

    // logOut
    const logOut = () => {
        signOut(auth)
    }

// export all auth 
const exposrtAuthentication = {
    createUserEmailPassword,
    loginEmailPassword,
    logOut

}




    return (
        <div>
            <authentication.Provider value={exposrtAuthentication}>
                {children}
            </authentication.Provider>
        </div>
    );
};

export default AuthProvider;