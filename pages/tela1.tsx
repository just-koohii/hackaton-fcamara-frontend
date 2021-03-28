import { PureComponent } from "react";
import { Heading } from "@Components";
import styles from "../styles/Tela.module.css";

export default class Tela1 extends PureComponent {
    
    render() {

    function handleInputChange(e: { target: { value: any; }; }) {
            console.log('handleInputChange', e.target.value);
        }

    function handleSubmit(e: { preventDefault: () => void; }) {
            e.preventDefault();
            console.log('handleSubmit'); /* ARRUMAR BUSCA DE DADOS PELO SUBMT */

        }
        return (

            <div>
                <div className={`${styles.root} ${styles.tela01}`}>
                    <Heading>Login</Heading>
                    <img src="imgico.jpg" alt="logo" className={`${styles.root11} ${styles.tela01}`}>

                    </img>

                    <div className={`${styles.root2} ${styles.tela01}`}>
                        <div>
                            <form onSubmit= {handleSubmit}>
                                <label htmlFor="user"> E-mail: </label>
                                <input type="email" id="user" placeholder="Informe UserName"
                                    className={`${styles.root2} ${styles.tela01} ${styles.root21} ${styles.tela01}  `}
                                    onChange={handleInputChange}>

                                </input>
                                <div className={`${styles.root2} ${styles.tela01}`}>
                                    <label htmlFor="senha"> Senha: </label>

                                    <input type="password" id="senha" placeholder="Informe a senha"
                                        className={`${styles.root3} ${styles.tela01} ${styles.root31} ${styles.tela01}`}
                                        onChange={handleInputChange}>

                                    </input>
                                </div>

                                <button type="button" className={`${styles.root4} ${styles.tela01}`} id="botao"> Entrar
          </button>
                            </form>
                        </div>
                    </div>
                </div>
                <form onSubmit= {handleSubmit}>
                    <select>
                        <option value="Opções de Escola">Escola Municipal</option>
                        <option value="Opções de Escola">Escola Estadual</option>
                    </select>
                    <br></br>
                    <input type= "text" name="Nome" placeholder="Nome dos Pais" onChange={handleInputChange}/>
                    <br></br>
                    <input type= "text" name="Nome" placeholder="Nome do Aluno"onChange={handleInputChange}/>
                    <br></br>
                    <input type= "text" name="email" placeholder="E-mail"onChange={handleInputChange}/>
                    <br></br>
                    <input type= "text" name="cpf" placeholder="CPF"onChange={handleInputChange}/>
                    <br></br>
                    <input type= "password" name="senha" placeholder="Criar Senha"onChange={handleInputChange}/>
                    <br></br>
                    <button type="submit">Enviar</button>


                </form>
            </div>

        );
    }
}


