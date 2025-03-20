import React from "react";
import "./Register.css"

function RegisterDonor() {
  return (
    <div>
      <div className="heading">
        <h1>Register as Donor</h1>
      </div>

      <section className="booking">
        <form action="RegisterForm.html" method="post" className="book-form">
          <div className="flex">
            <div className="inputBox">
              <span>First Name</span>
              <input type="text" placeholder="First Name" name="firstname" />
            </div>
            <div className="inputBox">
              <span>Last Name</span>
              <input type="text" placeholder="Last Name" name="lastname" />
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
              <span>Blood Group</span>
              <input type="text" placeholder="Blood Group" name="bloodgroup" />
            </div>
            <div className="inputBox">
              <span>District</span>
              <input type="text" placeholder="District" name="district" />
            </div>
            <div className="inputBox">
              <span>State</span>
              <input type="text" placeholder="State" name="state" />
            </div>
            <div className="inputBox">
              <span>PinCode</span>
              <input type="number" placeholder="Pin Code" name="pincode" />
            </div>
            <div className="inputBox">
              <span>Date of Birth</span>
              <input type="date" name="dob" />
            </div>
            <div className="inputBox">
              <span>Date of Last Donation</span>
              <input type="date" name="dold" />
            </div>
          </div>

          <input type="submit" value="Submit" className="btn" name="send" />
        </form>
      </section>
    </div>
  );
}

export default RegisterDonor;
