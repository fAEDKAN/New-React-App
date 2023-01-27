const InfoBarComponent = ({carrito}) => {
    return <div className="bg-white py-2">
        Elementos en el carrito: {carrito.length}
    </div>;
};

export default InfoBarComponent;
