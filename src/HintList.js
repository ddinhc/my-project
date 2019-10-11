import React from 'react'
export default class HintList extends React.Component {
    state = {
        on: false
    }

    handleClick = () => {
        this.setState({
            on: !this.state.on
        })
    }

    handleMouseOut = () => {
        this.setState ({
            on: false
        })
    }

   

    componentDidUpdate(){
        setTimeout(() => {
            if(this.state.on){
              window.addEventListener('click', this.onMouseOut)
            }
            else{
              window.removeEventListener('click', this.onMouseOut)
            }
          }, 0)
      }

    render(){

        return (
            <div className="hint-list">
                {
                    this.state.on && (
                        <span className="tooltiptext">{this.props.hint}</span>
                    )
                }
                <span className="badge badge-primary badge-pill mx-1 my-auto card-link"><a className="card-link hint" onClick={this.handleClick} onMouseOut={this.handleMouseOut} href={this.props.source}>{this.props.lang}</a></span>
            </div>
        )
    }
}

