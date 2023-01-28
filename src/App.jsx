import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import ProductsContainer from "./containers/ProductsContainer";
import { EcommerceProvider } from "./context/EcommerceContext";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <EcommerceProvider>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<HomeContainer />}
                        />
                        <Route
                            path="/products"
                            element={<ProductsContainer />}
                        />
                    </Routes>
                </EcommerceProvider>
            </BrowserRouter>
        </>
    );
};

export default App;
