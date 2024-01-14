import React from "react";
import "../style/Contact.css"
export const Contact = () => {
  return (
    <div className="contact">
      <div className="leftside"></div>
      <div className="rightside">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter Full Name" type="text"/>
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter Email" type="email"/>
            <label htmlFor="message">Message</label>
            <textarea rows="6" placeholder="Enter Message" name="message" required></textarea>
            <button type="submit">Send Message</button>
            </form>
      </div>
    </div>
  );
};

