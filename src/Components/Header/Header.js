import React from 'react'
import './header.css'

export default function Header() {
    return (
        <div id='main-container'>
            <header id='header'>
                <div className='image-container'>
                    <img className='image-tag' alt="logo" src="https://pbs.twimg.com/profile_images/1447862193756663810/PGxYNSyk_400x400.jpg"></img>
                    <p>rowzilla</p>
                </div>               
                <nav className='navbar'>
                    <ul className='contents'>
                        <li>Why build Community</li>
                        <li>Growth Academy</li>
                        <li>Insider</li>
                        <li>About Us</li>
                        <li><button>Join Discord</button></li>
                    </ul>
                </nav>
            </header>
                <div id='second-container'>
                    <div className='one-container'>
                        <h3>Gateway to forming effective online communities</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text
                         ever since the 1500s, when an unknown printer took a galley of type 
                         and scrambled it to make a type specimen book</p>
                        <button>Learn More</button>
                    </div>
                    <div className='two-container'>
                        <video controls>
                            <source src='vid.mp4' type='video/mp4'></source>
                        </video>
                    </div>
                </div>
        </div>
    )
}