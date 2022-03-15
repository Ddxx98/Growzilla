import React from 'react'
import './case.css'

export default function Case(){
    return(
        <div id="case-container">
            <div className='case-first-container'>
                <div className='inside-first-container'>
                    <h3>Case Study</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s,</p>
                </div>
            </div>
            <div className='case-second-container'>
                <div className='case-content'>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting </h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text
                         ever since the 1500s, when an unknown printer took a galley of type 
                         and scrambled it to make a type specimen book</p>
                    <a href='#'><button>Read more</button></a>
                </div>
                <div className='case-image'>
                    <img alt='car' src='#'></img>
                </div>
            </div>
            <div className='case-third-container'>
            <div className='case-image'>
                    <img alt='car' src='#'></img>
            </div>
            <div className='case-content'>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting </h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text
                         ever since the 1500s, when an unknown printer took a galley of type 
                         and scrambled it to make a type specimen book</p>
                         <a href='#'><button>Read more</button></a>
                </div>
            </div>
            <div className='case-fourth-container'>
                <div className='case-content'>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting </h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text
                         ever since the 1500s, when an unknown printer took a galley of type 
                         and scrambled it to make a type specimen book</p>
                         <a href='#'><button>Read more</button></a>
                </div>
                <div className='case-image'>
                    <img alt='car' src='#'></img>
                </div>
            </div>
            <div className='case-fifth-container'>
                <div className='case-fifth-container-header'>
                    <h3>More Case Studies</h3>
                    <button>View All Case Studies</button>
                </div>
                <div className='case-image-container'>
                    <div className='inside-case-image-container'>
                        <img src='#' alt='sites'></img><br></br>
                        <span>Blog</span><br></br>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text
                         ever since the 1500s, when an unknown printer</p>
                    </div>
                    <div className='inside-case-image-container'>
                    <img src='#' alt='sites'></img><br></br>
                        <span>Blog</span><br></br>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text
                         ever since the 1500s, when an unknown printer</p>    
                    </div>
                    <div className='inside-case-image-container'>
                    <img src='#' alt='sites'></img><br></br>
                        <span>Blog</span><br></br>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text
                         ever since the 1500s, when an unknown printer</p>    
                    </div>
                </div>
            </div>
        </div>
    )
}