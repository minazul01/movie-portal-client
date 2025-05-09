import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Utilis/Utilis";




export const authentication = createContext();
const AuthProvider = ({children}) => {

    const [user, setUser] =useState(null);
    console.log(user)
    const [loading, setLoading] = useState(true);

    // create user with email or password
   const createEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
   }

    // loginemailPassword
    const loginEmailPassword = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }
   

    // Google login
   const googleProvider = new GoogleAuthProvider();
   const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
   }
    

    // logOut
   const logOut = () => {
    signOut(auth)
   }

//    update Profile
const updateProfile = (userName, image) => {
   return updateProfile(auth, user, {
        displayName:userName, photoURL: image
    })
}


    
// expost all session 
const allData = {
    googleLogin,
    logOut,
    createEmailPass,
    loginEmailPassword,
    updateProfile,
    user,
    setUser,
    loading

}
    
 
    
    // onchange auth
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user){
            setUser(user)
        }else{
            setUser(null)
        }
        setLoading(false)
        });
      
        // Cleanup on unmount
        return () => {
          unsubscribe();
        };
      }, []);



    return (
        <div>
            <authentication.Provider value={allData}>
                {children}
            </authentication.Provider>
        </div>
    );
};

export default AuthProvider;