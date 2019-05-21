import React from 'react'

function Main(){
    
    return( 
        <div className="card text-center">
            <div className="card-header">My Quick Facts</div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                    <ul className="list-group">
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Employment: Web Developer at Ohlone College
                            <span className="badge badge-primary badge-pill">Aug 18 - Current</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                          Education: Bachelor’s Degree, Computer Science
                            <span className="badge badge-primary badge-pill">Since 2017</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            Laguages:
                               
                                <span className="badge badge-primary badge-pill mx-auto">Vietnamese</span>
                                <span className="badge badge-primary badge-pill mx-auto">Cantonese</span>
                                <span className="badge badge-primary badge-pill mx-auto">Mandarin</span>
                                <span className="badge badge-primary badge-pill mx-auto">English</span>
                                <span className="badge badge-primary badge-pill mx-auto">American Sign Language (ASL)</span>
                                
                            </li>
                        </ul> 
                </p>
                <a href="https://www.linkedin.com/in/duy-dinh-862ba596/" className="btn btn-primary">My Linkedin</a>
    
            </div>
            <div className="card-footer text-muted"> All up to date! </div>

        </div>
    )
}

export default Main