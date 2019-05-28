import React from 'react'
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
                               
                                <span className="badge badge-primary badge-pill mx-auto" data-toggle="tooltip" data-placement="top" title="Xin Chào!">Vietnamese</span>
                                <span className="badge badge-primary badge-pill mx-auto" data-toggle="tooltip" data-placement="top" title="你好!">Cantonese</span>
                                <span className="badge badge-primary badge-pill mx-auto" data-toggle="tooltip" data-placement="top" title="你好!">Mandarin</span>
                                <span className="badge badge-primary badge-pill mx-auto" data-toggle="tooltip" data-placement="top" title="Hello!">English</span>
                                <a href="https://www.lifeprint.com/asl101/pages-signs/h/hello.htm"><span className="badge badge-primary badge-pill mx-auto" data-placement="top" title="Click me!">American Sign Language (ASL)</span></a>
                                
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