import React from "react"
import Header from "./components/header/itemListContainer"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import CartWidget from "./components/main/CartWidget"
import { BrowserRouter } from "react-router-dom"



function App() {
    return (
        
            <BrowserRouter>
                <Header
                    nombre="Tutor/a"
                    apellido="Coder" />
                <Main />
                <Footer />
            </BrowserRouter>
        
    )
}

export default App