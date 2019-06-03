import React from 'react'

import ReactPlayer from 'react-player'

function Projects(props){
    return(
      
          
                  <div className="card">
        <ReactPlayer className="card-img-top" url={props.videoURL} playing width="100%" controls="true" />
         
                    <div className="card-body">
                      <div className="card-title h5">{props.heading}</div>
                      <p className="card-text">{props.description}</p>
        
                        <ul className="list-group list-group-flush"><strong>Core Languages & Frameworks:</strong>
                            <li className="list-group-item">{props.item1}</li>
                            <li className="list-group-item">{props.item2}</li>
                            <li className="list-group-item">{props.item3}</li>
                          </ul>
       
                    </div>
          </div>    
    )
}
export default Projects