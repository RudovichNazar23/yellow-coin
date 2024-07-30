import DashBoard from "../components/Pages/Dashboard";
import Portfolio from "../components/Pages/Portfolio";
import CoinBase from "../components/Pages/CoinBase";
import UserProfile from "../components/Pages/UserProfile";

export default function homePageReducer(state, { type, payload }){
    switch(type){
        case "Dashboard":
            return { component: <DashBoard />, data: payload, action: type }
        case "Portfolio":
            return { component: <Portfolio />, data: payload, action: type }
        case "CoinBase":
            return { component: <CoinBase />, data: payload, action: type }
        case "UserProfile":
            return { component: <UserProfile />, data: payload, action: type }
        default:
            return state;
    }
};