// Write all the code here
import React from "react";
import Menu from "./Menu";

function Home() {
    return(
        <div>
            <section className="home">
                <div>
                    <h1>Burger Shop</h1>
                    <p>Grab yourself a tasty burger!</p>
                </div>
                <a href="#menu">Explore Menu</a>
            </section>
            <div name="menu">
            {/* <a id="menu"> */}
                <Menu />
            {/* </a> */}
            </div>
        </div>
        
    );
}

export default Home;


