import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import InfoBarComponent from "../components/InfoBarComponent";

const ProductsContainer = () => {
    //A nuestro componente ProductsContainer le estamos creando 2 estados, carrito y productos
    const [carrito, setCarrito] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        //Es el hook que se ejecutará antes de que el componente se cree
        //Para cuando se está por montar un componente
        //(Acá se debería hacer el llamado a una API)
        const data = [
            {
                id: 1,
                name: "Nike",
                img: "https://cdn.pixabay.com/photo/2020/03/04/17/30/corgi-4902259_640.jpg",
                text: "Practicando un poquito de REACT paps, que es una librería de JS",
            },
            {
                id: 2,
                name: "Adidas",
                img: "https://cdn.pixabay.com/photo/2020/03/04/17/30/corgi-4902259_640.jpg",
                text: "Practicando un poquito de REACT paps, que es una librería de JS",
            },
            {
                id: 3,
                name: "DC",
                img: "https://cdn.pixabay.com/photo/2020/03/04/17/30/corgi-4902259_640.jpg",
                text: "Practicando un poquito de REACT paps, que es una librería de JS",
            },
            {
                id: 4,
                name: "Jordan",
                img: "https://cdn.pixabay.com/photo/2020/03/04/17/30/corgi-4902259_640.jpg",
                text: "Practicando un poquito de REACT paps, que es una librería de JS",
            },
            {
                id: 5,
                name: "Yeezy",
                img: "https://cdn.pixabay.com/photo/2020/03/04/17/30/corgi-4902259_640.jpg",
                text: "Practicando un poquito de REACT paps, que es una librería de JS",
            },
        ];
        setProducts(data); //
        return () => {
            console.log("Se está por morir el COMPONENT");
        };
    }, []);

    const AgregarAlCarrito = (event, name) => {
        carrito.push(name);
        setCarrito([...carrito]);
    };

    return (
        <Container className="bg-warning" style={{ textAlign: "center" }}>
            <InfoBarComponent carrito={carrito} />
            <Row className="px-2 py-2">
                {products.map((element) => {
                    return (
                        <CardComponent
                            title={element.name}
                            img={element.img}
                            text={element.text}
                            agregarAlCarrito={AgregarAlCarrito}
                        />
                    );
                })}
            </Row>
        </Container>
    );
};

export default ProductsContainer;
