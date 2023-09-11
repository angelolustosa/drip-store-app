import React from 'react'
import { Carousel, Col, Container, Image, Row, Stack } from 'react-bootstrap'
import tenis from '../../assets/slider/tenis.png'
import './Slider.css'
import { ButtonTemplate } from '../Button'

export const Slider = () => {
    return (
        <div style={{ backgroundColor: '#F5F5F5' }}>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <Container>
                        <Row>
                            <Col xs={6} md={5}>
                                <div style={{ paddingTop: '3rem' }}>
                                    <Stack gap={3} className='mt-5 mb-3'>
                                        <div className="melhores-ofertas">Melhores ofertas personalizadas</div>
                                        <div>
                                            <h1 className='queima'>Queima de stoque Nike 🔥</h1>
                                        </div>
                                        <div className="descricao">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</div>
                                    </Stack>


                                    <ButtonTemplate nome={'Ver Ofertas'} />
                                </div>
                            </Col>
                            <Col xs={6} md={6}>
                                <Image src={tenis} height={'110%'} fluid />
                            </Col>
                        </Row>
                    </Container>
                    {/* <ExampleCarouselImage text="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <Container>
                        <Row>
                            <Col xs={6} md={5}>
                                <div style={{ paddingTop: '3rem' }}>
                                    <Stack gap={3} className='mt-5 mb-3'>
                                        <div className="melhores-ofertas">Melhores ofertas personalizadas</div>
                                        <div>
                                            <h1 className='queima'>Queima de stoque Nike 🔥</h1>
                                        </div>
                                        <div className="descricao">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</div>
                                    </Stack>


                                    <ButtonTemplate nome={'Ver Ofertas'} />
                                </div>
                            </Col>
                            <Col xs={6} md={6}>
                                <Image src={tenis} height={'110%'} fluid />
                            </Col>
                        </Row>
                    </Container>
                    {/* <ExampleCarouselImage text="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <Container>
                        <Row>
                            <Col xs={6} md={5}>
                                <div style={{ paddingTop: '3rem' }}>
                                    <Stack gap={3} className='mt-5 mb-3'>
                                        <div className="melhores-ofertas">Melhores ofertas personalizadas</div>
                                        <div>
                                            <h1 className='queima'>Queima de stoque Nike 🔥</h1>
                                        </div>
                                        <div className="descricao">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</div>
                                    </Stack>


                                    <ButtonTemplate nome={'Ver Ofertas'} />
                                </div>
                            </Col>
                            <Col xs={6} md={6}>
                                <Image src={tenis} height={'110%'} fluid />
                            </Col>
                        </Row>
                    </Container>
                    {/* <ExampleCarouselImage text="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                {/* <Carousel.Item interval={500}>
                    <ExampleCarouselImage text="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage text="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </div>
    )
}
