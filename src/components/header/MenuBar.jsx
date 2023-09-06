import React from "react";
import { Button, Container, Navbar, Row } from "react-bootstrap";
import logo from '../../assets/logo/logo.svg'
import carrinho from '../../assets/icon/carrinho.svg'
import { InputSearch } from "../inputSearch/InputSearch";
import './MenuBar.css'

export const MenuBar = () => {
  return (
    <div>
      <Navbar className="bg-body-tertiary" style={{ paddingTop: '2em', paddingBottom: '2em' }}>
        <Container>
          <Row>
            <a class="logo-titulo  text-decoration-none d-flex" href="/">
              <img src={logo} alt="" class="styles_imagemLogo__9LaY3" />
              <div class="titulo">Digital Store</div>
            </a>
          </Row>
          {/* <Navbar.Brand href="/home" as={Col}>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <div className="titulo">Digital Store</div>
          </Navbar.Brand> */}
          <InputSearch />
          <a href="/cadastro" className="cadastrese">Cadastre-se</a>
          <Button className="btn-entrar" style={{ border: 'none', backgroundColor: '#c92071' }}>Entrar</Button>
          <img src={carrinho} alt="" class="styles_imagemLogo__9LaY3" />
        </Container>
      </Navbar>
    </div>
  );
};
