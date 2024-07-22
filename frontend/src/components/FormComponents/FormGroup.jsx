export default function FormGroup({ labelValue, inputType, inputId, errors }){
    return (
        <div className="mb-3">
            <label className="form-label">{labelValue}</label>
            <input type={inputType} 
                   id={inputId} 
                   className="form-control" 
                   required={true} 
            />
            {
                errors && (
                    <ul style={{width: "350px"}}>
                        {
                            errors.map((error, errorIndex) => <li key={errorIndex} className="text-danger m-1 p-1">{error}</li>)
                        }
                    </ul>
                )
            }
        </div>
    );
};