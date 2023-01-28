import { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import InfoBarComponent from "../components/InfoBarComponent";
import { EcommerceContext } from "../context/EcommerceContext";

const ProductsContainer = () => {
    const { products, carrito, setCarrito, fetchData, setProducts } =
        useContext(EcommerceContext);
    const { busqueda } = useParams();

    useEffect(() => {
        fetchData(busqueda);
        return () => {};
    });

    const AgregarAlCarrito = (event, product) => {
        carrito.push(product);
        setCarrito([...carrito]);
    };

    const handleKeyUp = (e) => {
        const productsFilter = products.filter(element => {
            if (element.title.toUpperCase().match(e.target.value.toUpperCase())) {
                return true;
            }
            return false;
        });
        setProducts(productsFilter);
    };

    return (
        <Container className="bg-warning" style={{ textAlign: "center" }}>
            <InfoBarComponent carrito={carrito} handleKeyUp={handleKeyUp} />
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
