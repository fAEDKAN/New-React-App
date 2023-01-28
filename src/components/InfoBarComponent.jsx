import { Link } from "react-router-dom";

const InfoBarComponent = ({ carrito, children, handleKeyUp }) => {

    return (
        <>
            <div className="bg-white py-2">
                <div>
                    <input type="text" onInput={handleKeyUp} placeholder="Buscar producto..." />
                </div>
                <Link to={"/"}>Ir al Home</Link>
                <br />
                Elementos en el carrito: {carrito.length}
                {children}
            </div>
            ;
        </>
    );
};

export default InfoBarComponent;
