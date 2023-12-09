// Write all the code here
import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

function Login() {
    return (
    <section className="login">
        
        <form>

            <div class="hstack mx-auto">
                <button type="button" class="btn btn-primary btn-lg" disabled>Login</button>
                <button type="button" class="btn btn-secondary btn-lg">Register</button>
            </div>
            
            <h5>Sign in with:</h5>
            <div class="icons">
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
            <h5>Or:</h5>
            <input type="email" placeholder="Email Address" required />
            <input type="text" id="password" name="password" placeholder="Password" required />
            
            <div>
                <span>
                    <input class="form-check-input" type="checkbox" id="rememberMe" name="remember" value="Remember me" />
                    <label class ="form-check-label" for="rememberMe">Remember me?</label>
                </span>
                <a href="contact">Forgot password?</a>
            </div>
            <button>Sign In</button>
            <div>
                <span>
                    <p>Not a member?<a href=""> Register</a></p>
                    
                </span>
            </div>
        </form>
    </section>
    );
}

export default Login;