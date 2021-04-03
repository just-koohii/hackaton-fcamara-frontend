import Link from 'next/link';
import { Button } from '@material-ui/core';

export function LinkButton({ innerRef = null, href, children, ...rest }) {
  return (
    <Link ref={innerRef} href={href} passHref>
      <Button {...rest} component="a">
        {children}
      </Button>
    </Link>
  );
}
