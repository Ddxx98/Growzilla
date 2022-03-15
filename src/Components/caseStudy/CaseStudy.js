import React from "react";
import './caseStudy.css'

export default function CaseStudy(){
    return (
        <div className='caseStudy-parent'>
            <div className='caseStudy-container'>
            <div className='row'>
                <div className='left-row'>
                    <h1>There is community for every one</h1>
                    <p className='caseStudy-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu quis ipsum neque, nibh dignissim malesuada. Diam convallis consectetur sed feugiat purus mi gravida massa eu. Fermentum massa aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales egestas lorem facilisis ut at dui.</p>
                </div>
                <div className='right-row'>
                <label className='community'><strong>community</strong></label>
                </div>
            </div>
            <div className='bottom-row'>
                    <div className='left-bottom'>
                    <h1 className='par'><span>"</span>Taking the time to <span>build community</span>, to get to know your people will have long lasting benefits<span>"</span></h1>
                </div>
                <div className='right-bottom'>
                    <img id='imgtag' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBp3gsQdFjO_r7zsVr0d-gs8n86rXGbmp3w&usqp=CAU"/><br></br>
                    <label><strong>Agarwal Williams</strong><br></br><span>CEO Microsoft</span></label>
                </div>
            </div>
            </div>
        </div>
    );
}