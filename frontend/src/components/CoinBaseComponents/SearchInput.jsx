export default function SearchInput(){
    return (
        <div className="container-fluid mt-1 d-flex flex-row align-items-center justify-content-center">
            <div className="col-10 p-2">
                <input type="text" className="form-control"/>
            </div>
            <div className="col-2 align-self-center">
                <button className="btn btn-primary btn-sm">Search</button>
            </div>
        </div>
    );
};