import React from "react"
import Header from "./Header"
import Main from "./main"
import Footer from "./footer"


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