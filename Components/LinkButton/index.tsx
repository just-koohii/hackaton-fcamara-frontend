/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { PureComponent } from "react";
import { withRouter, NextRouter } from "next/router";
import styles from "./linkButton.module.css";

type LinkButtonProps = {
  href: string;
  label: string;
  router: NextRouter;
};

class LinkButton extends PureComponent<LinkButtonProps> {
  render() {
    const { href, label, router } = this.props;

    return (
      <Link href={href}>
        <a
          className={
            router.pathname === href
              ? `${styles.root} ${styles.active}`
              : styles.root
          }
        >
          {label}
        </a>
      </Link>
    );
  }
}

export default withRouter(LinkButton);
