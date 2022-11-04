import React from 'react';


const ItemList = ({items}) => {
  return (
      <div>
      {
          items.map((item)=>{
              return <item key={item.id} {...item}/>
          })
      }
      </div>
  )
 

}

export default ItemList