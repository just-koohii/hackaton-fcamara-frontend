/* eslint-disable jsx-a11y/anchor-is-valid */
import { PureComponent } from 'react';
import Link from 'next/link';

export class LinkButton extends PureComponent {
  render() {
    const { href, children } = this.props;

    return (
      <Link href={href} as={href}>
        <a>{children}</a>
      </Link>
    );
  }
}
