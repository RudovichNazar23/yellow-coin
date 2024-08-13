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
        <div className="col-lg-12">
            <div className="nav-item dropdown-xl-center dropdown col-8">
                <a className="dropdown-toggle text-decoration-none text-dark" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    {user && user.username}
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