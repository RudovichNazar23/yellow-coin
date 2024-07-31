export default function ProfileButton({ textValue, color }){
    return (
        <div className="col-4 text-center">
            <button className={`btn ${color} btn-sm col-7`}>
                { textValue }
            </button>
        </div>
    );
};