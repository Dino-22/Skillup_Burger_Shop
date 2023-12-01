// Write all the code here
import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

function Login() {
    return (
    <section>
        <form>
            <h2>Login</h2>
            <h5>Sign in with:</h5>
            <div>
                <CgFacebook
                size="2rem" 
                />
                <AiOutlineTwitter
                    size="2rem"
                />
                <AiOutlineGoogle 
                    size="2rem"
                />
                <AiOutlineGithub 
                    size="2rem"
                />
            </div>
            <p>Or:</p>
            <input type="email" placeholder="Email Address" required />
            <input type="text" id="password" name="password" placeholder="Password" required />
            
            <div>
                <input type="checkbox" id="rememberMe" name="remember" value="Remember me" />
                <label for="rememberMe">Remember me?</label>
                <a href="contact">Forgot password?</a>
            </div>
            <button>Sign In</button>
        </form>
    </section>
    );
}

export default Login;