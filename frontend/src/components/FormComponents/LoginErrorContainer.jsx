import { useState, useEffect } from "react";

export default function LoginErrorContainer({ errorMessage }){
    const [error, setError] = useState(errorMessage);

    useEffect(
        () => {
            setError(errorMessage);
        }, [errorMessage]
    );

    return (
        <>
            {
                error && (
                    <div className="p-2 text-danger" style={{width: "350px"}}>
                        {error}
                    </div>
                )
            }
        </>
    );
};