import initializeAuthentication from "../pages/Shared/Login/Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const auth = getAuth();

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                //save user to the database
                addUserToDB(email, 'PUT', name);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                setAuthError('');
                navigate('/');
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    const signInUsingEmail = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                const redirect_uri = location?.state?.from || '/dashboard'
                history(redirect_uri)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setIsLoading(false))
    }
    const googleSignIn = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                const destination = location?.state?.from || '/';
                navigate(destination);
                addUserToDB(user.email, 'PUT', user.displayName)
                // ...
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }

    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
        ;
    }
    useEffect(() => {
        fetch(`https://boiling-sierra-59765.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setIsAdmin(data?.admin))
    }, [user?.email])

    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsLoading(false)
        })
    }, [])

    return {
        registerUser,
        googleSignIn,
        signInUsingEmail,
        logout,
        isAdmin,
        isLoading,
        user,
        error,
    }
}

const addUserToDB = (email, method, name) => {
    const addUser = {
        email: email,
        displayName: name,
    }
    fetch('https://boiling-sierra-59765.herokuapp.com/addUsers', {
        method: method,
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(addUser)
    })
        .then(res => res.json())

}

export default useFirebase;