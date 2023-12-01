// Write all the code here
import React from "react";
import "../../assets/bg.svg";
import DropdownMenu from "./DropdownMenu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoFastFoodOutline } from "react-icons/io5";


function Header() {
    return(
        <nav>
            <div>
                <IoFastFoodOutline />
            </div>
            <div>
                <a href="/home">Home</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
                <a href="/cart"><AiOutlineShoppingCart /></a>
                <DropdownMenu /> 
            </div>  
        </nav>
    );
}

export default Header;