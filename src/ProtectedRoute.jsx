import { useContext } from "react"
import { AuthContext } from "./contexts/AuthContext"
import { Navigate } from "react-router";

function ProtectedRoute({children}){
    const {user} = useContext(AuthContext);
    if(!user){
        return <Navigate to={'/Login'} replace />
    }
    return children;
}
export default ProtectedRoute