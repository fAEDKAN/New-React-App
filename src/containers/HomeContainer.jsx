import { useContext } from "react";
import { EcommerceContext } from "../context/EcommerceContext";

const HomeContainer = () => {
    const {carrito} = useContext(EcommerceContext);

    return <h1>¡Hola! Tenés {carrito.length} productos en tu carrito.</h1>;
};

export default HomeContainer;