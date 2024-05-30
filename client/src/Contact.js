import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className='contact'> 
            <h1 style={{ color: 'black', textAlign:'center'}}>Contact Us</h1>
            <div className="contact-us">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p>Contact us for any inquiries or feedback.</p>
                    <div className="info-item">
                        <span className="icon"><FaMapMarkerAlt /><b>Address</b></span>
                        <p>123 Street Name, City, Country</p>
                    </div>
                    <div className="info-item">
                        <span className="icon"><FaEnvelope /><b> E-Mail</b></span>
                        <p>info@example.com</p>
                    </div>
                    <div className="info-item">
                        <span className="icon"><FaPhone /><b> Phone Number</b></span>
                        <p>+1234567890</p>
                    </div>
                </div>
                <div className="contact-form">
                    <h2>Send us a message</h2>
                    <form>
                        {/* <label>
                            Question:
                            <input type="text" name="question" required />
                        </label> */}
                        <label>
                            Name:
                            <input type="text" name="name" required />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" required />
                        </label>
                        <label>
                            Phone Number:
                            <input type="tel" name="phone" required />
                        </label>
                        <label>
                            Your Message:
                            <textarea name="message" required></textarea>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
