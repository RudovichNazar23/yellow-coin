import api from "../../utils/api";

import { useReducer, useState, useEffect } from "react";
import { HomePageContext } from "../../context/HomePageContext";

import homePageReducer from "../../reducers/homePageReducer";

import HomeLogo from "../HomePageComponents/HomeLogo";
import OptionsList from "../HomePageComponents/OptionsList";
import DashBoard from "./Dashboard";
import ExpandNavbar from "../HomePageComponents/ExpandNavbar";

export default function HomePage(){
    const INITIAL_STATE = {
        action: "Dashboard",
        data: undefined,
        component: <DashBoard />
    };
    
    const [state, dispatch] = useReducer(homePageReducer, INITIAL_STATE);
    const [currentUserInfo, setCurrentUserInfo] = useState(undefined);

    useEffect(
        () => {
                const response = api.get("user_profile/user/get_current_user/");
                response
                .then((res) => {
                    if(res.status === 200){
                        setCurrentUserInfo(res.data);
                    }
                })
                .catch((error) => {
                    if(error.code === "ERR_NETWORK"){
                        alert("There is a network error, please try to use us next time...")
                        return;
                    }
                });
            }, []
    );
    
    return (
        <HomePageContext.Provider value={{"dispatch": dispatch, "user": currentUserInfo, "setUserInfo": setCurrentUserInfo}}>
                <div className="row">
                    <ExpandNavbar />
                    <div className="col-xl-3 col-md-3 vh-100 d-xl-inline d-md-inline d-none border">
                        <HomeLogo/>
                        <OptionsList/>
                    </div>
                    <div className="col-xl-9 col-md-9 col-12 d-flex flex-column">
                        {
                            state.component
                        }
                    </div>
                </div>
        </HomePageContext.Provider>
    );
};