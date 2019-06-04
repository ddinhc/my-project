import React from 'react'

class Jumbotron extends React.Component {
    render(){
         return(    
            <div className="jumbotron jumbotron-fluid" title="Decorative Image Background.">
                <div className="container overlay">
                    <h1 className="display-4">{this.props.heading}</h1>
                    <p className="lead">{this.props.description}</p>
                    <hr className="my-4"/>
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href={this.props.source} role="button">{this.props.cta}</a>
                    </p>   
                </div>
            </div>
            )
    }
}

export default Jumbotron