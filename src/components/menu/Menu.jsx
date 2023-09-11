import React from 'react'
import { Nav } from 'react-bootstrap'
import './Menu.css'
import { useLocation } from 'react-router-dom';

export const Menu = () => {
    const location = useLocation();

    const menus = [
        {
            nome: 'Home',
            path: '/'
        }, {
            nome: 'Produtos',
            path: '/produtos'
        }, {
            nome: 'Categoria',
            path: '/categoria'
        }, {
            nome: 'Meus Pedidos',
            path: '/meus-pedidos'
        }]

    return (
        <div /* className='d-flex justify-content-center' */>
            <Nav variant="underline" /* defaultActiveKey="/" */>
                {/* <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item> */}
                {menus.map((m, index) =>
                (<Nav.Item>
                    <Nav.Link name={m.nome} className={`${location.pathname === m.path ? 'active' : ''}`}/* eventKey={`link-${index + 1}`} */ href={m.path}>{m.nome}</Nav.Link>
                </Nav.Item>)
                )}
            </Nav>
        </div>
    )
}
