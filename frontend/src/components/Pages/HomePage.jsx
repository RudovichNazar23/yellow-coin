import api from "../../utils/api";

import { useReducer, useState, useEffect } from "react";
import { HomePageContext } from "../../context/HomePageContext";

import homePageReducer from "../../reducers/homePageReducer";

import HomeLogo from "../HomePageComponents/HomeLogo";
import OptionsList from "../HomePageComponents/OptionsList";
import DropUpMenu from "../HomePageComponents/DropUpMenu";

import DashBoard from "./Dashboard";

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
        <HomePageContext.Provider value={{"dispatch": dispatch, "user": currentUserInfo}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 min-vh-100 border-end">
                            <HomeLogo/>
                            <OptionsList/>
                            <DropUpMenu/>
                    </div>
                    <div className="col-9 d-flex flex-column">
                        {
                            state.component
                        }
                    </div>
                </div>
            </div>
        </HomePageContext.Provider>
    );
};