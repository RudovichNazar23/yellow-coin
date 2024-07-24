export default function DropUpMenu(){
    return (
        <div className="row g-3 m-2" style={{height: "65%"}}>
            <div className="col-12 mt-auto">
                <div className="row align-items-center justify-content-center">
                    <div class="btn-group dropup dropup-center col-12">
                        <button type="button" class="btn btn-secondary dropdown-toggle row" data-bs-toggle="dropdown" aria-expanded="false">
                            Options
                        </button>
                        <ul class="dropdown-menu w-100">
                            <li><a className="dropdown-item" href="#">New transaction</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr/></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};