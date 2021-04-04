import  React  from  'react' ;
//import Buscacep from './login/querocomprar.jsx'
import makeStyles from '@material-ui/core/styles/makeStyles';
import NearMeIcon from '@material-ui/icons/Nearme';
import {  
    Button,
    Grid,
    Box,
    Typography,
    GridList ,
    GridListTile,
    GridListTileBar ,
    IconButton 
} from '@material-ui/core';

export default function listaLojas() {
    
    const useStyles = makeStyles(({ spacing }) => ({
        gridList: {
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
            padding: spacing(4),
        },
        form: {
          padding: spacing(4),
        },
        gridListTile: {
            padding: spacing(4)
        },
        titleBar: {
            background:
              'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
          },
      }));

    const classes = useStyles();

    const tileData = [
        {
            img: 'loja1',
            title: 'Loja 1',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS-bull-trans-1.svg/1024px-NYCS-bull-trans-1.svg.png',
            width: '200px',
            height: '200px',
        },
        {
            img: 'loja2',
            title: 'Loja 2',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NYCS-bull-trans-2.svg/768px-NYCS-bull-trans-2.svg.png',
            width: '200px',
            height: '200px',
        },
        {
            img: 'loja3',
            title: 'Loja 3',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/NYCS-bull-trans-3.svg/1200px-NYCS-bull-trans-3.svg.png',
            width: '200px',
            height: '200px',
        },

        {
            img: 'loja4',
            title: 'Loja 4',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/NYCS-bull-trans-4.svg/1200px-NYCS-bull-trans-4.svg.png',
            width: '200px',
            height: '200px',
        },
    ];

    return (        
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            py={10}
        >
          <Grid xs={12} md={12} className={classes.form}>
            <Typography variant="h5">
                Fulano, listaremos as lojas parceiras do projeto. 
                Todas elas oferecem descontos para os produtos a serem doados e efetuam a entrega 
                diretamente na escola escolhida. 
            </Typography>
            </Grid>
            <GridList className={classes.gridList} cols={4}>
                {tileData.map((tile) => (
                <GridListTile key={tile.img}>
                    <img src={tile.src} alt={tile.title} width={tile.width} height={tile.heigth}/>
                    <GridListTileBar
                        title={tile.title} className={classes.gridListTile}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                            padding: classes.gridListTile,
                         }}
                         actionIcon={
                            <IconButton aria-label={`star ${tile.title}`} href="loja">
                              <NearMeIcon className={classes.title} />
                            </IconButton>
                          }
                     />
                    </GridListTile>
                ))}
            </GridList>
        <Grid xs={12} md={12} className={classes.form}>
          <Typography variant="h4">LOGO DO PROJETO</Typography>
        </Grid>
        </Box>
    );
  }