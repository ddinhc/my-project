import React from 'react'
import ReactTooltip from 'react-tooltip'
function HintList(props) {
    return(
        <div className="lang-list">
            <span className="badge badge-primary badge-pill mx-1 my-auto" data-tip data-for={props.identifier} data-place="bottom"><a className="text-white card-link" href={props.source}>{props.lang}</a></span>
            <ReactTooltip id={props.identifier} type='error' className="tooltips"  >
              <span>{props.hint}</span>
            </ReactTooltip>

        </div>
    )
}

export default HintList