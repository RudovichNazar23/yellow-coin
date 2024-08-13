export default function Banner({ userName }){
    return (
        <div className="col-xl-8 col-md-12 m-2 d-flex flex-column align-items-center justify-content-center order-xl-2">
            <h4>{ userName }</h4>
        </div>
    );
};