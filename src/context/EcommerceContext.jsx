const { createContext, useState, useEffect } = require("react");

export const EcommerceContext = createContext();

export const EcommerceProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [carrito, setCarrito] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                "https://api.mercadolibre.com/sites/MLA/search?q=zapatillas"
            );
            const response = await data.json();
            setProducts(response.results);
        }
        fetchData();
    }, []);
    return (
        <EcommerceContext.Provider value={{ products, carrito, setCarrito }}>
            {children}
        </EcommerceContext.Provider>
    );
};