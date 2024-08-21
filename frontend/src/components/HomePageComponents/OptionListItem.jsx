import { useContext } from "react";
import { HomePageContext } from "../../context/HomePageContext";

export default function OptionListItem({ textValue, iconName, action }){
    const { dispatch } = useContext(HomePageContext);
    const onClickHandler = (event) => {
        event.preventDefault();
        dispatch({ type: action })
    };

    return(
        <a className="col-lg-7 col-md-12 text-decoration-none text-dark d-flex" href="#" onClick={onClickHandler}>
            <img src={`/${iconName}`} width={"30"} height={"30"}/>
            <span className="ms-1 d-xl-inline ">{textValue}</span> 
        </a>
    );
};