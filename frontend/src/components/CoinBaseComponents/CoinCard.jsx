export default function CoinCard({ coin }){
    return (
        <div className="col-3 m-1 p-2 border rounded border-secondary d-flex flex-column align-items-center">
            <div className="col-12">
                <h5 className="text-center">Quick look</h5>
            </div>
            <hr className="container" />
            <div className="">
                <small>{ coin.title }</small>
            </div>
            <img src={coin.coin_image} alt="..." width={"250"} height={"250"}/>
            <button className="col-12 btn btn-primary btn-sm mt-2">More information</button>
        </div>
    );
};