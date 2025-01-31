import { Header } from "./LandingPage.tsx";
import { BASE_URL } from "../App.tsx"
import { useState } from "react";
import { useNavigate,Outlet } from "react-router-dom";
import axios from "axios";

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