import React from "react";
import "./FindBlood.css";
import { useState } from "react";

function Blood() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        setSubmitted(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        setTimeout(() => {
            setSubmitted(false);
        }, 4000);
    };
    return (
        <div className="FindBlood">
            <div className="left-side"></div>
            <div className="right-side">
                {submitted && (
                    <div className="success-message">
                        Form submitted successfully!
                    </div>
                )}

                <form className="book-form" onSubmit={handleSubmit}>
                    <div className="flex">
                        <h2>Recipient Details</h2>

                        <div className="inputBox">
                            <span>Name of the patient</span>
                            <input type="text" placeholder="Name of the patient" name="name" />
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
                            <span>Address</span>
                            <input type="text" placeholder="Type Here" name="address" />
                        </div>

                        <div className="inputBox">
                            <span>Age</span>
                            <input type="number" placeholder="Age" name="age" />
                        </div>

                        <div className="inputBox">
                            <span>Blood  Group</span>
                            <input type="text" placeholder="Blood Group" name="bloodgroup" />
                        </div>

                        <div className="inputBox">
                            <span>State</span>
                            <input type="text" placeholder="State" name="state" />
                        </div>

                        <div className="inputBox">
                            <span>Pin Code</span>
                            <input type="number" placeholder="Pin Code" name="pincode" />
                        </div>

                        <div className="inputBox">
                            <span>Date of Birth</span>
                            <input type="date" placeholder="Date of Birth" name="dob" />
                        </div>

                        <div className="inputBox">
                            <span>Date of Last Donation</span>
                            <input type="date" placeholder="Last Donation" name="dold" />
                        </div>
                    </div>

                    <input type="submit" value="Submit" className="btn" name="send" />
                </form>
            </div>
        </div>
    );
}

export default Blood;