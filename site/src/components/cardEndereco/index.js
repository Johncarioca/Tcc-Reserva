import './index.scss'



export default function CardEndereco({item: { id, rua, complemento, estado, referencia, bairro, cep, cidade}, selecionar, selecionado}){



    return(
        <main className="cardEnde" 
            >

            <section className="cor" onClick={() => selecionar(id)} 
                                        style={{backgroundColor: selecionado ?  '#883F35' :'#FDE5DE',
                                                color: selecionado ?  '#fff' :'black',
                                                width: selecionado ?  '100%' : '100%',
                                                height: selecionado ?  '11rem' : '11rem',
                                                paddingLeft: selecionado ?  '1.5rem' : '1rem',
                                                borderRadius: selecionado ?  '10px' : '0px',
                                        }}
                                        >

                <div className="casas">

                    <div className="cs">
                        <h2>{referencia}</h2>    
                    </div>
                    <div className="point">
                        <img className="g" src="../assets/image/point.png" alt="" />
                    </div>

                </div>

                <div className="infosEndere">

                    <div className="ph">
                        <p>{rua}</p>
                        <p>-</p>
                        <p>{cep}</p>
                    
                    </div>
                    <div className="ph">
                        <p>
                            {bairro}
                        </p>
                        <p> - </p>
                        <p>
                            {cidade}
                        </p> 
                        <p>{estado}</p>
                    </div>
                    <div className="ph">
                        <p>{complemento}</p>
                    </div>

                
                </div>
            </section>
        </main>
    );
}