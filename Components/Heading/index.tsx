import { PureComponent, ReactNode } from "react";
import styles from "./heading.module.css";

type LinkButtonProps = {
  children: ReactNode;
};

export class Heading extends PureComponent<LinkButtonProps> {
  render() {
    const { children } = this.props;

    return <h1 className={styles.root}>{children}</h1>;
  }
}
