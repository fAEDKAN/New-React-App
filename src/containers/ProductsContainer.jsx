import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import InfoBarComponent from "../components/InfoBarComponent";

const ProductsContainer = () => {
    //A nuestro componente ProductsContainer le estamos creando 2 estados, carrito y productos
    const [carrito, setCarrito] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            let data = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=zapatillas');
            let response = await data.json();
            setProducts(response.results);
        }
        loadData();

        return () => {
            console.log("Se está por morir el COMPONENT");
        };
    }, []);

    const AgregarAlCarrito = (event, product) => {
        carrito.push(product);
        setCarrito([...carrito]);
        console.log(carrito);
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
