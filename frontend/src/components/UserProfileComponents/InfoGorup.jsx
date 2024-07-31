export default function InfoGroup({ labelValue, fieldValue }){
    return (
        <div className="col-8 d-flex flex-row border rounded-5 mt-1">
            <div className="col-3 border-end border-dark">
                { labelValue }
            </div>
            <div className="col-5 px-3">
                { fieldValue }
            </div>
        </div>
    );
};