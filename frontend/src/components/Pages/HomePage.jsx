import { useReducer } from "react";
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
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 min-vh-100 border-end">
                    <HomePageContext.Provider value={{"dispatch": dispatch}}>
                        <HomeLogo/>
                        <OptionsList/>
                        <DropUpMenu/>
                    </HomePageContext.Provider>
                </div>
                <div className="col-9 d-flex flex-column">
                    {
                        state.component
                    }
                </div>
            </div>
        </div>
    );
};