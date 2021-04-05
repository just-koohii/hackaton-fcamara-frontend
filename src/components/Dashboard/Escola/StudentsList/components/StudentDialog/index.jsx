import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  dialogContent: {
    minWidth: 350,
  },
});

export default function StudentDialog({ open, onClose, data }) {
  const classes = useStyles();

  const formatAddress = () => {
    const { logradouro, numero, cidade, estado } = data.pais.endereco;

    return `${logradouro}, ${numero}, ${cidade}, ${estado}`;
  };

  return (
    <Dialog onClose={onClose} open={open}>
      {data && (
        <>
          <DialogTitle id="customized-dialog-title">
            {data.nome.toUpperCase()}
          </DialogTitle>
          <DialogContent className={classes.dialogContent} dividers>
            <List>
              <ListItem>
                <ListItemText
                  primary="Nome da mãe"
                  secondary={data.pais.nome_mae}
                />
              </ListItem>
              {data.pais.nome_pai && (
                <ListItem>
                  <ListItemText
                    primary="Nome do pai"
                    secondary={data.pais.nome_pai}
                  />
                </ListItem>
              )}
              <ListItem>
                <ListItemText
                  primary="Email dos pais"
                  secondary={data.pais.email}
                />
              </ListItem>

              <ListItem>
                <ListItemText primary="Endereço" secondary={formatAddress()} />
              </ListItem>
            </List>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
}
