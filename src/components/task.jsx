import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function task({title, description,icon}) {
    return (
        <div className="task">
            <div className="icon-task">
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="task-desc">
                <span>{title}</span>
                <p>{description}</p>
            </div>
        </div>
    ) 
}
