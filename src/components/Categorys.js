import { productos } from "./Products"

export const getProducts = () => {

    let pedidoProductos = new Promise((response) => {
        setTimeout(() => {
            response(productos)
        }, 2000)
    })

    return pedidoProductos
}

export const getProductsByCategoryId = (id) => {

    let pedidoProductos = new Promise ((response) => {
        setTimeout(() =>{
            response(productos.filter(item=>item.Category == id))
        }, 2000)
    })
    return pedidoProductos
}

export const getDetailsById = (id)=> {

    let mostrarDetalles = new Promise ((response) => {
        setTimeout(() =>{
            response(productos.find(item=> item.id == id))
        },2000)
    })
    return mostrarDetalles

}