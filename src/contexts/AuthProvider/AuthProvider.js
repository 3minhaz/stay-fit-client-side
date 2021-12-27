import { createContext } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import useFirebase from "../../hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContexts = useFirebase();
    // const { isLoading } = useAuth();
    // if (isLoading) {
    //     return <Spinner animation="grow" />
    // }
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;
