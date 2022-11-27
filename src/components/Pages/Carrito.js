import { addDoc, collection, serverTimestamp  } from "firebase/firestore"
import { useContext, useRef, useState } from "react"
import React from 'react'
import { db } from "../../firebase"
import { useCarrito } from "../ContextProvider"
import {contexto} from "../ContextProvider"






const Carrito = () => {
        
     
  const valorDelContexto = useCarrito()
  
  const refName = useRef() 
  const refAge = useRef()
  const [id, setId] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault()
      const orden = {
          buyer: {
              name: "Matias Pozzi",
              phone: "123456789",
          },
          products: [],
          total : 100,
          date : serverTimestamp()
      }

      const ordersCollection = collection(db, "orders")
      const consulta = addDoc(ordersCollection,orden)
      
      consulta
          .then((docRef) => {
              setId(docRef.id)
          })
          .then((error)=>{
              console.log(error)
          })
          
        }
 
        const { products, cantidadTotal } = valorDelContexto; 
    

  return (
      <div>
          {id ? <h1>Orden generada con exito, su id es {id}</h1> : null}
          <form onSubmit={handleSubmit}>
              <div>
                  <input ref={refName} type="text" />
              </div>

              <div>
                  <input ref={refAge} type="text" />
              </div>
              <button >guardar</button>
          </form>
      </div>
  )
}

export default Carrito