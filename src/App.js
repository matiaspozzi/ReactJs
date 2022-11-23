import React, { createContext } from "react"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import { BrowserRouter } from "react-router-dom"

export const contexto = createContext()
const { Provider } = contexto

function App() {
    
    const valorDelContexto = {
       
    }
    
    
    return (
        <Provider value={valorDelContexto}>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </Provider>
    )
}

export default App