import { useContext } from "react";
import { InfoGroupContext } from "../../context/InfoGroupContext";

export default function InfoGroup({ labelValue, fieldValue, inputId, errors }){
    const { isEdit } = useContext(InfoGroupContext);

    return (
        <>
            <div className="col-xl-7 col-md-7 col-12 d-flex flex-row mt-1">
                <div className="col-4 align-self-center">
                    { labelValue }
                </div>
                {
                    !isEdit ? (
                        <div className="mx-2 align-self-center">
                            { fieldValue ? fieldValue : <span className="text-secondary">...</span> }
                        </div>
                    ) :
                    (
                        <input type="text" className="form-control mx-1" defaultValue={fieldValue} id={inputId}/>
                    )
                }
            </div>
            {
                (errors.length > 0 && isEdit) &&  (
                    <div className="row p-1 mt-2 justify-content-end">
                        {
                            errors.map(
                                (error, errorIndex) => <span className="text-danger col-7" key={errorIndex}>{ error }</span>
                            )
                        }
                    </div>
                )
            }
        </>
    );
};