import React from 'react'
import { Button } from 'react-bootstrap'

export const ButtonTemplate = (props) => {
    return (
        <Button className="btn-entrar" style={{ border: 'none', backgroundColor: '#c92071' }}>{props.nome}</Button>
    )
}
