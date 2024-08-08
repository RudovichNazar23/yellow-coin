import Spinner from "react-bootstrap/Spinner";

export default function Loading(){
    return (
        <div>
            <Spinner animation="grow" variant="warning" className="m-1"/>
            <Spinner animation="grow" style={{color: "#D3D3D3"}} className="m-1"/>
            <Spinner animation="grow" variant="warning" className="m-1"/>
        </div>
    )
};