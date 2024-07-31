import { HOME_PAGE_ACTIONS } from "../utils/homePageActions";

import DashBoard from "../components/Pages/Dashboard";
import Portfolio from "../components/Pages/Portfolio";
import CoinBase from "../components/Pages/CoinBase";
import UserProfile from "../components/Pages/UserProfile";

export default function homePageReducer(state, { type, payload }){
    switch(type){
        case HOME_PAGE_ACTIONS.dasboard:
            return { component: <DashBoard />, data: payload, action: type }
        case HOME_PAGE_ACTIONS.portfolio:
            return { component: <Portfolio />, data: payload, action: type }
        case HOME_PAGE_ACTIONS.coinBase:
            return { component: <CoinBase />, data: payload, action: type }
        case HOME_PAGE_ACTIONS.userProfile:
            return { component: <UserProfile />, data: payload, action: type }
        default:
            return state;
    }
};