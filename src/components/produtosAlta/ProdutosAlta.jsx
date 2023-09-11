import './ProdutosAlta.css'
import produtoTenis from '../../assets/colecoes/tenis_colecao.png'

export const ProdutosAlta = () => {
    const alta = [{
        categoria: 'Tênis',
        produto: 'K-Swiss V8 - Masculino',
        off: 30,
        image: produtoTenis,
        precoAntes: 200,
        precoDepois: 100
    },
    {
        categoria: 'Tênis',
        produto: 'K-Swiss V8 - Masculino',
        precoAntes: 200,
        off: 30,
        image: produtoTenis,
        precoDepois: 100
    },
    {
        categoria: 'Tênis',
        produto: 'K-Swiss V8 - Masculino',
        precoAntes: 200,
        image: produtoTenis,
        precoDepois: 100
    },
    {
        categoria: 'Tênis',
        produto: 'K-Swiss V8 - Masculino',
        precoAntes: 200,
        image: produtoTenis,
        precoDepois: 100
    },
    {
        categoria: 'Tênis',
        produto: 'K-Swiss V8 - Masculino',
        precoAntes: 200,
        precoDepois: 100
    },
    {
        categoria: 'Tênis',
        produto: 'K-Swiss V8 - Masculino',
        precoAntes: 200,
        precoDepois: 100
    },
    {
        categoria: 'Tênis',
        produto: 'K-Swiss V8 - Masculino',
        precoAntes: 200,
        precoDepois: 100
    },
    {
        categoria: 'Tênis',
        produto: 'K-Swiss V8 - Masculino',
        precoAntes: 200,
        precoDepois: 100
    }]
    return (
        <div>
            <div className="container pt-2 pb-3">
                <div className='text-start'>Produtos em Alta</div>
                <a href="/all">Ver todos -&gt;</a>
            </div>

            <div className="container text-center">
                <div className="row g-4">
                    {alta.map((c, index) => {
                        return (
                            <div key={index} className="col mb-4" >
                                <div className="card-colecao col " style={{ backgroundImage: `url(${produtoTenis})` }}>
                                    {c.off ? <div className="off">{`${c.off}% OFF`}</div> : null}

                                </div>
                                <div className='text-start'>
                                    <div className='categoria'>{c.categoria}</div>
                                    <div className='produto'>{c.produto}</div>
                                    <div>
                                        <span className='preco-antes'>{`R$ ${c.precoAntes}`}</span>
                                        <span className='preco-depois'>{`R$ ${c.precoDepois}`}</span>
                                    </div>
                                </div>
                                {/* <div>
                                    <div className='card-container'>
                                        <div >
                                            <div className='container-off'>
                                                <div className="off">30% OFF</div>
                                            </div>
                                            <img src={produtoTenis} alt="" />
                                        </div>
                                    </div>
                                    <div className='text-start'>
                                        <div className='categoria'>{c.categoria}</div>
                                        <div className='produto'>{c.produto}</div>
                                        <div>
                                            <span className='preco-antes'>{`R$ ${c.precoAntes}`}</span>
                                            <span className='preco-depois'>{`R$ ${c.precoDepois}`}</span>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
