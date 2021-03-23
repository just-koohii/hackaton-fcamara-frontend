import { PureComponent } from "react";
import { Heading } from "@Components";
import styles from "../styles/Tela.module.css";

export default class Tela1 extends PureComponent {
  render() {
    return (
      <div className={`${styles.root} ${styles.tela03}`}>
        <Heading>Você está na tela_03!</Heading>
      </div>
    );
  }
}
