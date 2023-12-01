// Write all the code here
import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
    return (
        <footer>
            <div>
                <h2 className="h2">Burger Shop</h2>
                <p>Bringing you the best taste in burgers</p>
                <p className="strong">Copyright © burgershop</p>
            </div>
            <aside>
                <h4>Follow Us</h4>
                <AiFillYoutube 
                    size="2rem"
                />
                <AiFillInstagram 
                    size="2rem"
                />
            </aside>
        </footer>
    );
}


export default Footer;
