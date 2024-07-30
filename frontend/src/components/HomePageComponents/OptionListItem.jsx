import { useContext } from "react";
import { HomePageContext } from "../../context/HomePageContext";

export default function OptionListItem({ textValue, iconName, type }){
    const { dispatch } = useContext(HomePageContext);
    const onClickHandler = (event) => {
        event.preventDefault();
        dispatch({ "type": type })
    };

    return(
        <a className="col-lg-7 col-md-12 text-decoration-none text-dark d-flex" href="#" onClick={onClickHandler}>
            <img src={`/${iconName}`} width={"30"} height={"30"}/>
            <span className="d-none d-sm-inline ms-1">{textValue}</span>
        </a>
    );
};