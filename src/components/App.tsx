import "./App.css";
import { PortfolioApp } from "./PortfolioApp";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <div className="App">
            <ChakraProvider>
                <PortfolioApp />
            </ChakraProvider>
        </div>
    );
}

export default App;
