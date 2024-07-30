import { useNavigate } from "react-router-dom";

import DropDownItem from "./DropDownItem";

export default function DropUpMenu(){
    const navigate = useNavigate();

    const SignOutHandler = (event) => {
        event.preventDefault();
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div className="row g-3 m-1 mt-5" style={{height: "50%"}}>
            <div className="col-lg-12 col-sm-4 justify-content-center align-items-center mt-auto">
                <div className="btn-group dropup col-4 ">
                    <a className="dropdown-toggle text-decoration-none align-self-end text-dark" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="d-none d-sm-inline text-dark m-2">
                            UserXd
                        </span>
                    </a>
                    <ul className="dropdown-menu">
                        <DropDownItem textValue={"New transaction"} />
                        <DropDownItem textValue={"Settings"} />
                        <DropDownItem textValue={"Profile"}/>
                        <li><hr/></li>
                        <DropDownItem textValue={"Sign out"} clickHandler={SignOutHandler}/>
                    </ul>
                </div>
            </div>
        </div>
    );
};