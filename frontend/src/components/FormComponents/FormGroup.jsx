export default function FormGroup({ labelValue, inputType,  }){
    return (
        <div className="mb-3">
            <label className="form-label">{labelValue}</label>
            <input type={inputType} className="form-control"/>
        </div>
    );
};