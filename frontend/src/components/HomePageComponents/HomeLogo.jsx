export default function HomeLogo(){
    return (
        <div className="row g-2 m-1">
            <div className="col-lg-2 col-md-12 col-sm-12 align-self-start text-center">
                <img src="/coin.png" width={"50"} height={"50"}/>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 align-self-end text-center">
                <span className="fs-5 d-none d-sm-inline d-md-inline">yellow-coin.com</span>
            </div>
        </div>
    );
};