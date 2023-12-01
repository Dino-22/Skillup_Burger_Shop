// Write all the code here
import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import "../../styles/menu.scss";
// import { title } from "process";


// function CreateMenuCard(props) {
//     <MenuCard 
//         key={}
//     />
// }

function Menu() {
    const addToCartHandler = (itemNum) => {};
    return(
        <div id="menu">
            <h1 >Menu</h1>
            <div>
                <MenuCard 
                    // key={props.itemNum}
                    itemNum={1}
                    burgerSrc={burger1}
                    price={1.00}
                    title="Cheese Burger"
                    handler={addToCartHandler}
                    delay={0.5}
                />
                <MenuCard 
                    // key={props.itemNum}
                    itemNum={2}
                    burgerSrc={burger2}
                    price={2.00}
                    title="Mega Burger"
                    handler={addToCartHandler}
                    delay={0.5}
                />
                <MenuCard 
                    // key={props.itemNum}
                    itemNum={3}
                    burgerSrc={burger3}
                    price={3.00}
                    title="Double Cheese Burger with Fries"
                    handler={addToCartHandler}
                    delay={0.5}
                    />
            </div>
        </div>
    );
}

export default Menu;