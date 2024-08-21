import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { HomePageContext } from "../../context/HomePageContext";
import { HOME_PAGE_ACTIONS } from "../../utils/homePageActions";

import DropDownItem from "./DropDownItem";

export default function DropMenu(){
    const navigate = useNavigate();
    const { dispatch, user } = useContext(HomePageContext);

    const onSignOutHandler = (event) => {
        localStorage.clear();
        navigate("/login");
    };

    const userProfileHandler = (event) => {
        dispatch({ type: HOME_PAGE_ACTIONS.userProfile });
    };

    return (
        <div className="col-lg-7 m-1">
            <div className="nav-item dropdown-xl-center dropdown">
                <a className="col-lg-7 text-decoration-none text-dark d-flex flex-row" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="/user.svg" alt="..."/>
                    <span className="ms-1">
                        {user && user.username}
                    </span>
                    <span className="dropdown-toggle ms-1"/>
                </a>
                <ul className="dropdown-menu">
                    <DropDownItem textValue={"New transaction"} />
                    <DropDownItem textValue={"Settings"} />
                    <DropDownItem textValue={"Profile"} clickHandler={userProfileHandler} />
                    <li><hr/></li>
                    <DropDownItem textValue={"Sign out"} clickHandler={onSignOutHandler}/>
                </ul>
            </div>
        </div>
    );
};