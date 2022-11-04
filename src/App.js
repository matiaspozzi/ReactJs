import React from "react"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import CartWidget from "./components/main/CartWidget"
import { BrowserRouter } from "react-router-dom"



function App() {
    return (

        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
        </BrowserRouter>

    )
}

export default App