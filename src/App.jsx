import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import ProductsContainer from "./containers/ProductsContainer";
import { EcommerceProvider } from "./context/EcommerceContext";
import { addElementToCart } from "./Redux/actions/cart";

const App = () => {

    const STATE = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    console.log(STATE);

    return (
        <>
            <Button onClick={() => {dispatch(addElementToCart({id: 1, name: 'shirt', price: 3000}))}}>
                Agregar al carrito
            </Button>
            <BrowserRouter>
                <EcommerceProvider>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<HomeContainer />}
                        />
                        <Route
                            exact
                            path="/products"
                            element={<ProductsContainer />}
                        />
                        <Route
                            path="/products/:busqueda"
                            element={<ProductsContainer />}
                        />
                    </Routes>
                </EcommerceProvider>
            </BrowserRouter>
        </>
    );
};

export default App;
