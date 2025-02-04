
import { useNavigate,Outlet } from "react-router-dom";

export function ProtectedRoutes(){
    const token = sessionStorage.getItem("token")
    const navigate = useNavigate()
    if(!token){
        navigate("/login")
    }else{
        return <Outlet />
    }
}

export default ProtectedRoutes