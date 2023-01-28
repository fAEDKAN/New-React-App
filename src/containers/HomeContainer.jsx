import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EcommerceContext } from "../context/EcommerceContext";

const HomeContainer = () => {
    const { carrito } = useContext(EcommerceContext);
    return (
        <>
            <Button variant="info">
                <Link to={'/products'}>Ver todos los productos</Link>
            </Button>
            <h1>¡Hola! Tenés {carrito.length} productos en tu carrito.</h1>;
        </>
    );
};

export default HomeContainer;
