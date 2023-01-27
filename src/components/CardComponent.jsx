import { Button, Card } from "react-bootstrap";

const CardComponent = ({ product, agregarAlCarrito }) => {
    //title, img y text son las props que recibirá de ProductsContainer
    return (
        <Card style={{ width: "12rem" }}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
                <Card.Title>{product.title} - <b>$ {product.price}</b></Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button
                    variant="primary"
                    onClick={(event) => {
                        agregarAlCarrito(event, product);
                    }}
                >
                    Agregar al carrito
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;
