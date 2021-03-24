import { PureComponent } from "react";
import { Heading } from "@Components";
import styles from "../styles/Tela.module.css";

export default class Tela2 extends PureComponent {
  render() {
    return (
      <div className={`${styles.root} ${styles.tela02}`}>
        <Heading>Você está na tela_02!</Heading>
      </div>
    );
  }
}
