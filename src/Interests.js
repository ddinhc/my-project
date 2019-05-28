import React from 'react'
import CardImage from './images/CardImage.jpg'
import ReactPlayer from 'react-player'

function Projects(){
    return(
      
            <div className="card-columns">
                  <div className="card">
            <img src={CardImage} alt="Card image cap" className="card-img-top"/>
                    <div className="card-body">
                      <div className="card-title h5">Sau Chieu Store Website</div>
                      <p className="card-text">Display About, Contact, Gallery and etc about the auto-part store.</p>
         <a href="https://ddinhc.github.io/sauchieu-store/" class="btn btn-primary">Visit Site</a>
                        <ul className="list-group list-group-flush"><strong>Core Languages & Frameworks:</strong>
                            <li className="list-group-item">HTML, CSS</li>
                            <li className="list-group-item">Bootstrap 4</li>
                            <li className="list-group-item">JavaScripts, Angular.js</li>
                          </ul>
       
                    </div>
          </div>
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
        <div className="card">
             <ReactPlayer className="card-img-top" url='https://youtu.be/cgRV-PEwQfM' playing />
            <div className="card-body">
            <div className="card-title h5">Mobile Webapp</div>
              <p className="card-text"></p>
              <p className="card-text"><small className="text-muted">Webapp for travelers to find food & drink, hotels, shopping malls and parks and check the weathers before deciding where to go. </small></p>
                <ul className="list-group list-group-flush"><strong>Core Languages & Frameworks:</strong>
                            <li className="list-group-item">HTML, CSS</li>
                            <li className="list-group-item">JavaScripts</li>
                            <li className="list-group-item">jQuery Mobile, Bootstrap 4</li>              
                          </ul>
            </div>
        </div>
         
        
       
        </div>
       
    )
}
export default Projects