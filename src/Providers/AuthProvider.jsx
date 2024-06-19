import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider  } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
  }


  const handleGithubSignIn = () => {
    return signInWithPopup(auth, githubProvider)
  }

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const[theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  }



  const updateUser = (user, name, photo) => {
    
    return updateProfile(user, {
      displayName: name,
       photoURL: photo
    })
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const passwordReset = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
   const unSubscribe =  onAuthStateChanged(auth, currentUser => {
      console.log('user in the auth state changed', currentUser)
      setUser(currentUser)
      setLoading(false)
      
    });
    return () => {
      unSubscribe();
    }
  },[])






  const authInfo = {
    user,
    createUser,
    logOut,
    signIn,
    handleGoogleSignIn,
    handleGithubSignIn,
    updateUser,
    loading,
    theme,
    setTheme,
    passwordReset

  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;