import Link from 'next/link';
import { Button } from '@material-ui/core';

export function LinkButton({ href, children, ...rest }) {
  return (
    <Link href={href} passHref>
      <Button {...rest} component="a">
        {children}
      </Button>
    </Link>
  );
}
