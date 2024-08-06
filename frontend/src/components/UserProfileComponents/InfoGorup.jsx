import { useContext } from "react";
import { InfoGroupContext } from "../../context/InfoGroupContext";

export default function InfoGroup({ labelValue, fieldValue, inputId, errors }){
    const { isEdit } = useContext(InfoGroupContext);

    return (
        <>
            <div className={`col-8 d-flex flex-row ${!isEdit && `border rounded-5`} mt-1`}>
                <div className="col-3 border-end border-dark p-1">
                    { labelValue }
                </div>
                {
                    !isEdit ? (
                        <div className="col-5 p-1 mx-1">
                            { fieldValue ? fieldValue : <span className="text-secondary">No information provided</span> }
                        </div>
                    ) :
                    (
                        <input type="text" className="form-control mx-2" defaultValue={fieldValue} id={inputId}/>
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