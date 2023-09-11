import camiseta from '../../assets/categorias/camiseta.png'
import calcas from '../../assets/categorias/calca.png'
import bone from '../../assets/categorias/bones.png'
import headphones from '../../assets/categorias/headset.png'
import tenis from '../../assets/categorias/tenis.png'

import camisaStarWarsColecao from '../../assets/destaque/camisa-star-wars.png'
import tenisColecao from '../../assets/destaque/tenis.png'
import headphoneColecao from '../../assets/destaque/headphone.png'

import { ProdutosAlta } from '../produtosAlta/ProdutosAlta'
import './ColecoesDestaque.css'
import { ButtonTemplate } from '../Button'

export const ColecoesDestaque = () => {

    const colecoes = [{
        titulo: 'Novo drop Supreme',
        off: '30',
        image: camisaStarWarsColecao
    }, {
        titulo: 'Novo drop Supreme',
        off: '30',
        image: tenisColecao,
        class: 'tenis-colecao'
    }, {
        titulo: 'Novo drop Supreme',
        off: '30',
        image: headphoneColecao
    }]

    const categorias = [{
        titulo: 'Camisetas',
        image: camiseta
    }, {
        titulo: 'Calças',
        image: calcas,
    }, {
        titulo: 'Bonés',
        image: bone
    }, {
        titulo: 'Headphones',
        image: headphones,
    }, {
        titulo: 'Tênis',
        image: tenis
    }]


    return (
        <div>
            <div className='mb-4' style={{ backgroundColor: '#f9f8fe' }}>

                <div className="container pt-4">
                    <h3>Coleções em destaque</h3>
                </div>

                <div className="container text-center">
                    <div className='row' style={{ gap: '12px' }}>
                        {colecoes.map((c, index) => {
                            return (
                                <div key={index} className={`card col ${c.class ? c.class : ''} `} style={{ backgroundImage: `url(${c.image})`, border: 'none' }}>
                                    <div className="off">{`${c.off}% OFF`}</div>
                                    <h3 className="titulo-card">{c.titulo}</h3>
                                    <ButtonTemplate nome='Comprar' />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div >
                    <h3 className="colecoes-destaque text-center">Coleções em destaque</h3>

                    <div className="container text-center">
                        <div className="row justify-content-md-center" style={{ marginBottom: '123px' }}>
                            {categorias.map((c, index) => {
                                return (
                                    <div key={index} className="col-sm-2">
                                        <div className="circle">
                                            <img src={c.image} alt="" />
                                            <p className='mt-4'>{c.titulo}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <ProdutosAlta />
            </div>
        </div>
    )
}
