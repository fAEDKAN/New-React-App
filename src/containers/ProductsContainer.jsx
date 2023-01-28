import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import InfoBarComponent from "../components/InfoBarComponent";
import { EcommerceContext } from "../context/EcommerceContext";

const ProductsContainer = () => {
    //A nuestro componente ProductsContainer le estamos creando 2 estados, carrito y productos
    const [carrito, setCarrito] = useState([]);
    const {products} = useContext(EcommerceContext);

    useEffect(() => {
        return () => {
        };
    }, []);

    const AgregarAlCarrito = (event, product) => {
        carrito.push(product);
        setCarrito([...carrito]);
    };

    return (
        <Container className="bg-warning" style={{ textAlign: "center" }}>
            <InfoBarComponent carrito={carrito} />
            <Row className="px-2 py-4">
                <Col className="d-flex flex-wrap justify-content-center gap-4">
                    {products.map((element, index) => {
                        return (
                            <span key={index}>
                                <CardComponent
                                    product={element}
                                    agregarAlCarrito={AgregarAlCarrito}
                                />
                            </span>
                        );
                    })}
                </Col>
            </Row>
        </Container>
    );
};

export default ProductsContainer;
