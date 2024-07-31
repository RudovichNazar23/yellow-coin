export default function Banner({ userName }){
    return (
        <div className="col-8 m-2  d-flex flex-column align-items-center justify-content-center">
            <h4>{ userName }</h4>
            <div className="col-10 p-1 d-flex flex-row">
                <div className="col-10 rounded-5 text-center bg-primary">
                    <small>Value: 140</small>
                </div>
                <div className="col-2 rounded-5 text-center bg-warning">
                    <small>Goal: 150</small>
                </div>
            </div>
        </div>
    );
};