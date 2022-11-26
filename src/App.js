import React, { createContext } from "react"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import { BrowserRouter } from "react-router-dom"
import ContextProvider from './components/ContextProvider';

import { app, db } from "./firebase"



export const contexto = createContext()



function App() {
    
    
    
    return (
        <ContextProvider>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </ContextProvider>
    )
}

export default App
