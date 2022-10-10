import './index.scss'
import {useState} from 'react'
import  CabeçarioLogin from '../../../components/cabecalhoLogin/index.js'

export default function CadastroUsuario (){

    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [Nome, setNome] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [Nascimento, setNascimento] = useState('');
    const [CPF, setCPF] = useState('');
    const [ConfirSenha, setConfirSenha] = useState('');

    
    return(

        <main className="cadastrousuario">
            <CabeçarioLogin/>    

            <section className = " cont1-cadastro">

                <div className="alinhamento-cadastrouser"> 
                    <div className="subcon1-cadastro">   
                    
                        <div className="inpucont-cadastro">
                            <p> Foto de perfil: </p>

                            <div className="inserir-imagem">
                                <img src="/assets/image/SelecionarImagem.png" alt="" />

                                <input type="file" />
                            </div>
                        </div>

                        <div className='inpucont-cadastro'>
                            <label >E-mail:</label>
                            <input className='input-cadastro' type="text" placeholder='@gmail.com' />
                        </div>

                        <div className='inpucont-cadastro'>
                            <label>Senha:</label>
                            <input className='input-cadastro'type="password" />
                        </div>

                        <div className='inpucont-cadastro'>
                            <label > Nome completo:</label>
                            <input className='input-cadastro' type="text" placeholder='...' />
                        </div>
                    </div>

                    <div className="subcon2-cadastro">

                        <div className='inpucont-cadastro'>
                            <label > Data de nascimento:
                            </label>
                            <input className='input-cadastro' type="text" placeholder='...' />
                        </div>

                        <div className='inpucont-cadastro'>
                            <label > Telefone:</label>
                            <input className='input-cadastro' type="text" placeholder='...' />
                        </div>

                        <div className='inpucont-cadastro'>
                            <label > CPF: </label>
                            <input className='input-cadastro' type="text" placeholder='...' />
                        </div>

                        <div className='inpucont-cadastro'>
                            <label > Comfirmar senha: </label>
                            <input className='input-cadastro' type="text" placeholder='...' />
                        </div>
                    </div>
                

                    <div className="subcon3-cadastro">

                        <img className="fun-cad" src="../assets/image/cardloginuser.png" />

                        <button className="bt-cadastrar">  
                        Cadastrar
                        </button>

                        <div className="link-logincadastro" >
                            <p> Já possui uma conta? </p>
                            <p>clique <a className="a-logincadastro" href="../login">aqui</a> </p>
                        </div>

                    </div>
                </div>

            </section>
        </main>

    );

}