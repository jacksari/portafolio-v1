import React from 'react'

export default function Breadcrumb({titulo, message}) {
    //console.log('titulo',  titulo);
    return (
        <div className="breadcrumb">
            <span>{  message}</span>
            <h1>{ titulo }</h1>
        </div>
    )
}
