
import React from "react";
import me from "../../assets/skj.jpg";
import { LiaSearchengin } from "react-icons/lia";

function About() {
    return(
        <section className="about">
            <main className="about">
                <h1>About Us</h1>
                <article>
                    <h4>Burger Shop</h4>
                    <p>This is Burger Shop. The place ofr most tasty burges on the entire earth.</p>
                    <p>Explore the various types of food and burgers. Click below to see the menu</p>
                    <a href="home"><LiaSearchengin /></a>
                </article>
                <div>
                    <h2>Founder</h2>
                    <article>
                        <div>
                            <img src={me} alt="Founder" height={200} width={200} />
                            <h3>Nelson</h3>
                        </div>
                        <p>Hey, Everyone I am Nelson, the founder of Burger Shop.</p>
                    </article>
                    
                </div>
            </main>
            
        </section>
    );
}

export default About;