import React from 'react'
import './footer.css'

export default function Footer(){
    return(
        <div className='container'>
            <footer>
            <div className="footer-container">
                <div className="footer1">
                    <h3>Growzilla</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text
                         ever since the 1500s, when an unknown printer took a galley of type 
                         and scrambled it to make a type specimen book</p>
                        <img src='#' alt='logo'></img>
                </div>
                <div class="footer2">
                    <h3>Company</h3>
                    <p>Why build community</p>
                        <p>Growth Academy</p>
                        <p>About Us</p>
                        <p>Careers <span>We are hiring</span></p>
                </div>
                <div class="footer3">
                    <h3>Insider</h3> 
                       <p>Our community</p>
                       <p>Podcast</p>
                       <p>Webinars</p>
                       <p>Blogs</p>
                       <p>Newletter</p>
                
                </div>
                <div class="footer4">
                    <h3>Support</h3>
                    <p>Terms of service</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </footer>
        </div>
    );
}