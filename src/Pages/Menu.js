import {MenuList} from "../helpers/MenuList"
//import React,{useState} from 'react'
import React from "react"
import MenuItem from '../Components/MenuItem'
import '../Styles/Menu.css'
import {Link} from 'react-router-dom'
function Menu() {
    // const[cart,setCart]=useState([])

   
    // const addCart=(menuItem)=>{
    //     let newCart=[...cart]
    //   let itemInCart=cart.find(
    //       (item)=>menuItem.name===item.name
    //     );
        
    //     if(itemInCart){
    //       itemInCart.quantity++;
    //     }else{
    //       itemInCart={
    //         ...menuItem,quantity:1,
    //       }
    //       newCart.push(itemInCart);
    
    //     }
    //     setCart(newCart)
    //    // setCart([...cart,{...product}]);
    //   }
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

export default Menu
