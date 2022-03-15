import React from "react";
import './growthAcademy.css'

export default function GrowthAcademy(){
    return (
        <div>
            <div className="container1">
            <div className='left-container'>
            <div id='img'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXSZkTK0Q-qU0NM2T585iAgjGe8HOlKkmgA&usqp=CAU' alt='join-growth'/>
            </div>
            </div>
            <div className='right-container'>
            <h1>Join growth academy and learn more on community building</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu quis ipsum neque, nibh dignissim malesuada. Diam convallis consectetur sed feugiat purus mi gravida massa eu. Fermentum massa aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales egestas lorem facilisis ut at dui.</p>
            <div>
            <button className='btn-join'>Enroll Now</button>
            <button className='btn-join'>Know More</button>
            </div>
            </div>
            </div>
        </div>
    );
}