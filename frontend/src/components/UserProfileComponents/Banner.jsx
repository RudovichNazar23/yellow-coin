export default function Banner({ userName }){
    return (
        <div className="col-8 m-2  d-flex flex-column align-items-center justify-content-center">
            <h4>{ userName }</h4>
        </div>
    );
};