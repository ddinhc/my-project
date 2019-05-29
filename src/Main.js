import React from 'react'
import ReactTooltip from 'react-tooltip'
import Interests from './Interests'
function Main(){
    
    return( 
        
        <div className="card text-center">
            <div className="card-header text-white bg-danger">My Quick Facts</div>
            <div className="card-body">
               
                <p className="card-text">
                    <ul className="list-group">
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Employment: Web Developer at Ohlone College
                            <span className="badge badge-primary badge-pill">Sept 2017 - Current</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                          Education: Bachelor of Science - BS, Computer Science
                            <span className="badge badge-primary badge-pill">Since 2017</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            Laguages:
                               
                                <span className="badge badge-primary badge-pill mx-auto my-auto" data-tip data-for="vietnamese" data-place="bottom">Vietnamese</span>
                                <ReactTooltip id="vietnamese" type='error'>
                                  <span>Xin Chào!</span>
                                </ReactTooltip>
                                <span className="badge badge-primary badge-pill mx-auto my-auto" data-tip data-for="cantonese" data-place="bottom">Cantonese</span>
                                <ReactTooltip id="cantonese" type='error'>
                                  <span>你好!</span>
                                </ReactTooltip>
                                <span className="badge badge-primary badge-pill mx-auto my-auto" data-tip data-for="mandarin" data-place="bottom">Mandarin</span>
                                <ReactTooltip id="mandarin" type='error'>
                                  <span>你好!</span>
                                </ReactTooltip>
                                <span className="badge badge-primary badge-pill mx-auto my-auto" data-tip data-for="english" data-place="bottom">English</span>
                                <ReactTooltip id="english" type='error'>
                                  <span>Hello!</span>
                                </ReactTooltip>
                               <span className="badge badge-primary badge-pill mx-auto" data-place="bottom" data-tip data-for="asl"> <a className="text-white card-link" href="https://www.lifeprint.com/asl101/pages-signs/h/hello.htm">American Sign Language (ASL)</a></span>
                                <ReactTooltip id="asl" type='error'>
                                  <span>View the "Hi" video in ASL.</span>
                                </ReactTooltip>
                                
                            </li>
                        </ul> 
                </p>
                <a href="https://www.linkedin.com/in/duy-dinh-862ba596/" className="btn btn-primary">My Linkedin</a>
    
            </div>
            <div className="card-footer  text-white bg-danger"> All up to date! </div>
            
            <h2>My Interests</h2>
            <Interests />

        </div>
    )
}

export default Main