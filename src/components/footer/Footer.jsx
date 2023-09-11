import { Container, Image } from 'react-bootstrap'
import logo from '../../assets/icon/dc_branco.png'
import facebook from '../../assets/icon/facebook.png'
import instagram from '../../assets/icon/instagram.png'
import twitter from '../../assets/icon/twitter.png'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <footer class="pt-4 my-md-5 pt-md-5">{/* border-top */}
          <div class="row">
            <div class="col-12 col-md-5">
              {/* <img class="mb-2" src={logo} alt="" width="24" height="19" /> */}
              <img className="mb-2" src={logo} alt="" width="31" height="31" />
              <span className='text-logo'>Digital Store</span>
              <p style={{ marginTop: '30px', fontWeight: '700', maxWidth: '20em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <div className='social-icons'>
                <Image src={facebook}></Image>
                <Image src={instagram}></Image>
                <Image src={twitter}></Image>
              </div>
            </div>
            <div class="col-6 col-md">
              <h5>Informação</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-3"><a className="text-light text-decoration-none" href="#"><p>Sobre Drip Store</p></a></li>
                <li className="mb-3"><a className="text-light text-decoration-none" href="#"><p>Segurança</p></a></li>
                <li className="mb-3"><a className="text-light text-decoration-none" href="#"><p>Wishlist</p></a></li>
                <li className="mb-3"><a className="text-light text-decoration-none" href="#"><p>Blog</p></a></li>
                <li className="mb-3"><a className="text-light text-decoration-none" href="#"><p>Trabalhe conosco</p></a></li>
                <li className="mb-3"><a className="text-light text-decoration-none" href="#"><p>Meus Pedidos</p></a></li>
              </ul>
              {/* <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Random feature</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Team feature</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Another one</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Last time</a></li>
            </ul> */}
            </div>
            <div class="col-6 col-md">
              <h5>Categorias</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-3"><a className="text-light text-decoration-none" href="#"><p>Camisetas</p></a></li>
                <li className="mb-3"><a className="text-light text-decoration-none" href="#"><p>Calças</p></a></li>
                <li className="mb-3"><a className="text-light text-decoration-none" href="#"><p>Bonés</p></a></li>
                <li className="mb-3"><a className="text-light text-decoration-none" href="#"><p>Headphones</p></a></li>
                <li className="mb-3"><a className="text-light text-decoration-none" href="#"><p>Tênis</p></a></li>
              </ul>
              {/* <h5>Resources</h5>
              <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Resource</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Resource name</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Another resource</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Final resource</a></li>
              </ul> */}
            </div>
            <div class="col-6 col-md">
              <h5>Contato</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-5"><a className="text-light text-decoration-none" href="#"><p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p></a></li>
                <li className="mb-3"><a className="text-light text-decoration-none" href="#"><p>(85) 3051-3411</p></a></li>
              </ul>
              {/* <h5>About</h5>
              <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Team</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Locations</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Privacy</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Terms</a></li>
              </ul> */}
            </div>
          </div>

          <div>
            <hr />
            <p className='pb-4 footer-bottom'>{`@${new Date().getFullYear()} Digital College`}</p>
          </div>
        </footer>
      </Container>
    </div>
  )
}
