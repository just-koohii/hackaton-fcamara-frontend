import { PureComponent, ReactNode } from "react";
import styles from "./navbar.module.css";

type LinkButtonProps = {
  children?: ReactNode;
};

export class NavBar extends PureComponent<LinkButtonProps> {
  render() {
    const { children } = this.props;
    return <div className={styles.root}>{children}</div>;
  }
}
