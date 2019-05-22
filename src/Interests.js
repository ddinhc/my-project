import React from 'react'
import CardImage from './images/CardImage.jpg'
function Projects(){
    return(
      
            <div className="card-columns">
                  <div className="card">
            <img src={CardImage} alt="Card image cap" className="card-img-top"/>
                    <div className="card-body">
                      <div className="card-title h5">Sau Chieu Store Website</div>
                      <p className="card-text">Display About, Contact, Gallery and etc about the auto-part store.</p>
         <a href="https://ddinhc.github.io/sauchieu-store/" class="btn btn-primary">Visit Site</a>
                        <ul className="list-group list-group-flush"><strong>Core Languages:</strong>
                            <li className="list-group-item">HTML, CSS</li>
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
        
         
        
       
        </div>
       
    )
}
export default Projects