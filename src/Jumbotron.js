import React from 'react'

function Jumbotron (props){
    
    return(    
        <div className="jumbotron jumbotron-fluid" title="Decorative Image Background.">
              <div className="container overlay">
                <h1 className="display-4">{props.heading}</h1>
                <p className="lead">{props.description}</p>
        <hr className="my-4"/>
<p class="lead">
    <a class="btn btn-primary btn-lg" href={props.source} role="button">{props.cta}</a>
           </p>   </div>
        </div>
    )
}


export default Jumbotron