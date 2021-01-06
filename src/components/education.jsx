import React from 'react'

export default function Education({year, lugar, title, description}) {
    return (
        <div className="education">
            <div className="primera">
                <h5 className="year">{year}</h5>
                <span className="lugar">{lugar}</span>
            </div>         
            <div className="segunda">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
            </div>   
        </div>
    )
}
