import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ACCESS, REFRESH } from "../utils/constants";
import api from "../utils/api";
import { jwtDecode } from "jwt-decode";

export default function ProtectedRoute({ children }){
    const [IsAuthenticated, setIsAuthenticated] = useState(null);
    useEffect(
        () => {
            auth().catch((error) => setIsAuthenticated(false));
        },[]
    );

    const navigate = useNavigate();

    const refresh = async () => {
        const refreshToken = localStorage.getItem(REFRESH);

        try{
            const response = await api.post("/auth/token/refresh/", { "refresh": refreshToken });
            if(response.status === 200){
                localStorage.setItem(ACCESS, response.data.access);
                setIsAuthenticated(true);
            }
            else{
                setIsAuthenticated(false);
            }
        }   
        catch (error){
            setIsAuthenticated(false)
        }
    };

    const auth = async () => {
        const accessToken = localStorage.getItem(ACCESS);

        if(!accessToken){
            setIsAuthenticated(false);
            return;
        }
        
        const decodedToken = jwtDecode(accessToken);
        const tokenExpiration = decodedToken.exp;
        const currentTime = Date.now() / 1000;

        if(tokenExpiration < currentTime){
            await refresh();
        }
        else{
            setIsAuthenticated(true);
        }

    };

    if(IsAuthenticated === null) return <div>Loading...</div>

    return IsAuthenticated ? children : navigate("/login");
};