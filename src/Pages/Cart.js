import React from 'react'
import MenuItem from '../Components/MenuItem'
import '../Styles/Menu.css'
import {MenuList} from "../helpers/MenuList"
function Cart() {
    return (
        <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList">
  {MenuList.map((menuItem,key)=>{
      return(
      <MenuItem key={key} image={menuItem.image}
 name={menuItem.name}
price={menuItem.price} /> ); })}
        </div> 
       
            

        </div>
    )
}

export default Cart
