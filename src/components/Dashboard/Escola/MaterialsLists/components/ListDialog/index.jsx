import {
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  dialogContent: {
    minWidth: 450,
  },
});

export default function ListDialog({ open, onClose, data }) {
  console.log(data);
  const classes = useStyles();

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle id="customized-dialog-title">Materiais</DialogTitle>
      <DialogContent className={classes.dialogContent} dividers>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="center">Quantidade</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map(({ nome, ListaMaterial }) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {nome}
                  </TableCell>

                  <TableCell align="center" component="th" scope="row">
                    {ListaMaterial.quantidade}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </Dialog>
  );
}
