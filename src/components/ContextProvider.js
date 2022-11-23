
import React from "react"   
import {useState, createContext} from 'react';

export const contexto = createContext()


const { Provider } = contexto

const ContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([
        
    ])
    
    const [total, setTotal] = useState(7)
   
    
    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
    }
    const valorDelContexto = {
        productos: carrito,
        cantidad: total,
        vaciarCarrito : vaciarCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    );
}

export default ContextProvider;