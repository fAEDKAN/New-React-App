import { Button, Card } from "react-bootstrap";

const CardComponent = ({ title, img, text, agregarAlCarrito }) => {
    //title, img y text son las props que recibirá de ProductsContainer
    return (
        <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button
                    variant="primary"
                    onClick={(event) => {
                        agregarAlCarrito(event, title);
                    }}
                >
                    Agregar al carrito
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;
