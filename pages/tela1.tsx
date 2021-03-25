import { PureComponent } from "react";
import { Heading } from "@Components";
import styles from "../styles/Tela.module.css";

export default class Tela1 extends PureComponent {
  render() {
    return (
      <div>
      <div className={`${styles.root} ${styles.tela01}`}>
        <Heading>Login</Heading>
      
        <img src="imgico.jpg" alt="logo" className={`${styles.root11} ${styles.tela01}`}>

        </img>
   
        <div className={`${styles.root2} ${styles.tela01}`}>
        <div>
        <form>
        <label htmlFor="user"> E-mail: </label>
        <input type="email" id="user" placeholder="Informe UserName"
         className={`${styles.root2} ${styles.tela01} ${styles.root21} ${styles.tela01}  `}>
          
        </input>
        <div className={`${styles.root2} ${styles.tela01}`}>
        <label htmlFor="senha"> Senha: </label>

        <input type="password" id="user" placeholder="Informe a senha" 
        className={`${styles.root3} ${styles.tela01} ${styles.root31} ${styles.tela01}`}>
          
        </input>
        </div>

        <button type="button" className={`${styles.root4} ${styles.tela01}`} id = "botao" > Entrar
        </button>
        </form>
        </div>
      </div>
      </div>
</div>
    
    );
  }
}
