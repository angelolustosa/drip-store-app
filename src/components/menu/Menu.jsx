import React from 'react'
import { Nav } from 'react-bootstrap'
import './Menu.css'

export const Menu = () => {
    const menus = [
        {
            nome: 'Home',
            path: '/home'
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
            <Nav variant="underline" defaultActiveKey="/home">
                {menus.map(m =>
                (<Nav.Item>
                    <Nav.Link href={m.path}>{m.nome}</Nav.Link>
                </Nav.Item>)
                )}
                {/* <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled">
                        Disabled
                    </Nav.Link>
                </Nav.Item> */}
            </Nav>
        </div>
    )
}
