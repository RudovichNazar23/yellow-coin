export default function FormGroup({ labelValue, inputType, inputId }){
    return (
        <div className="mb-3">
            <label className="form-label">{labelValue}</label>
            <input type={inputType} id={inputId} className="form-control" required={true}/>
        </div>
    );
};