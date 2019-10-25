import React from 'react'

import Project from './Project'
import HintList from './HintList'
import CardImage from './images/CardImage.jpg'
function Main(){
    
    return( 
        
        <div className="card text-center">
            <div className="card-header text-white bg-danger">My Quick Facts</div>
            <div className="card-body">
               
                <p className="card-text">
                    <ul className="list-group">
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Employment: Web Developer at <HintList lang="DAP" hint="Disaster Accountablity Project" identifer="DAP" />
                            <span className="badge badge-primary badge-pill">June 2019 - Current</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                          Education: Bachelor of Science - BS, Computer Science
                            <span className="badge badge-primary badge-pill">Since 2017</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            Laguages:
                             
                                <HintList lang="Vietnamese" hint="Xin Chào!" identifier="vietnamese"/>
                                <HintList lang="Cantonese" hint="你好!" identifier="cantonese"/>
                                <HintList lang="Mandarin" hint="你好!" identifier="mandarin"/>
                                <HintList lang="English" hint="Hello!" identifier="english"/>
                                <HintList lang="American Sign Language (ASL)" hint='View the "Hi" video in ASL.' identifier="asl" source="https://www.babysignlanguage.com/dictionary/h/hello/?v=7516fd43adaa"/>
                      
                            </li>
                        </ul> 
                </p>
                <a href="https://www.linkedin.com/in/duy-dinh-862ba596/" className="btn btn-primary">My Linkedin</a>
    
            </div>
            <div className="card-footer  text-white bg-danger"> All up to date! </div>
            
            <h2>My Interests</h2>
             <div className="card-columns">
                
            <Project videoBool="false" imgSrc={CardImage} alt="Card image cap" heading="Sau Chieu Store Website" description="Display About, Contact, Gallery and etc about the auto-part store." link="https://ddinhc.github.io/sauchieu-store/" linkName="Visit Site" item1="HTML, CSS" item2="Bootstrap 4" item3="JavaScripts, Angular 8"/>
          <div className="card p-3">
            <blockquote className="blockquote mb-0 card-body">
            
              <p>Faith is taking the first step even when you don't see the whole staircase.</p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Martin Luther King, Jr. in <cite title="Source Title">Brainy Quote</cite>
                </small>
              </footer>
            </blockquote>
          </div>
        <Project videoBool="true" videoURL="https://youtu.be/cgRV-PEwQfM" heading="Mobile Webapp" description="Webapp for travelers to find food & drink, hotels, shopping malls and parks and check the weathers before deciding where to go." item1="HTML, CSS" item2="JavaScripts" item3="jQuery Mobile, Bootstrap 4"/>
        
       
         
        
       
        </div>

        </div>
    )
}

export default Main