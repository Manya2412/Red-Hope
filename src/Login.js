import "./Login.css";
import React from "react";

function LoginForm() {
    return (
        <div className="login-box">
            <div className="right-side">
                <form action="loginpage.html" method="post" className="book-form">
                    <div className="flex">
                        <h2>Log In</h2>
                        <div className="inputBox">
                            <span>First Name</span>
                            <input type="text" placeholder="First Name" name="firstname" />
                        </div>
                        <div className="inputBox">
                            <span>Last Name</span>
                            <input type="text" placeholder="Last Name" name="secondname" />
                        </div>
                        <div className="inputBox">
                            <span>Phone Number</span>
                            <input type="number" placeholder="Number" name="phone" />
                        </div>
                        <div className="inputBox">
                            <span>Email</span>
                            <input type="email" placeholder="Mail ID" name="email" />
                        </div>
                        <div className="inputBox">
                            <span>Date of Birth</span>
                            <input type="date" placeholder="Date of Birth" name="dob" />
                        </div>
                    </div>

                    <input type="submit" value="Log In" className="btn" name="send" />
                </form>
            </div>
        </div>
    );
}

export default LoginForm;