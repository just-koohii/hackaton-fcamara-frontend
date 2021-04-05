import {
  Dialog,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiWindowClose } from '@mdi/js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
  closeButton: {
    position: 'absolute',
    right: spacing(1),
    top: spacing(1),
  },
  table: {
    minWidth: 450,
  },
}));

export default function MaterialsDialog({ onClose, open }) {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Lista de materiais
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <Icon path={mdiWindowClose} size={1} />
        </IconButton>
      </DialogTitle>
      <TableContainer className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="center">Solicitado</TableCell>
              <TableCell align="center">Doado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                caderno
              </TableCell>
              <TableCell align="center">2</TableCell>
              <TableCell align="center">1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                caneta
              </TableCell>
              <TableCell align="center">2</TableCell>
              <TableCell align="center">2</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Dialog>
  );
}
