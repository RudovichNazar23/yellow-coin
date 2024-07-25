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
        <div className="row g-3 m-2" style={{height: "65%"}}>
            <div className="col-12 mt-auto">
                <div className="row align-items-center justify-content-center">
                    <div class="btn-group dropup dropup-center col-12">
                        <button type="button" class="btn btn-secondary dropdown-toggle row" data-bs-toggle="dropdown" aria-expanded="false">
                            Options
                        </button>
                        <ul class="dropdown-menu w-100">
                            <DropDownItem textValue={"New transaction"} />
                            <DropDownItem textValue={"Settings"} />
                            <DropDownItem textValue={"Profile"} />
                            <li><hr/></li>
                            <DropDownItem textValue={"Sign out"} clickHandler={SignOutHandler}/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};