import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';



const ItemDetailContainer = () => {
    const [producto, setProducto]=useState({});
    const [loading,setLoading] = useState(true)
    const {id}=useParams()

    async function getProductos() {
        const collectionRef = collection(db, "productos");
        let results = await getDocs(collectionRef);
        let dataProductos = results.docs.map( doc => { 
            return { id: doc.id, ...doc.data()};
           })
        return dataProductos;  
    }

    useEffect(() => {
      getOne(id)
      .then((res) => {
        if (res !== undefined) {
        setProducto(res);
        }else {
         throw new Error()
        }
      })
      .finally(()=> setLoading(false))
     },[id]);

    return (
        <div className='contenedor-detail'>
        {
         Object.keys(item).length === 0 ? <h1 className='loading'>Cargando...</h1> : <ItemDetail {...item}/>}
        </div>
    );
}

export default ItemDetailContainer;