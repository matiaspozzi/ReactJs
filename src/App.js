import React from "react"
import Header from "./components/header/itemListContainer"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import cartWidget from "./components/main/cartWidget"



function App() {
    return (
        <>
            <Header 
                    nombre="Tutor/a" 
                    apellido="Coder"/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App