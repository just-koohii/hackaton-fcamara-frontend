import  React  from  'react' ;
//import Buscacep from './login/querocomprar.jsx'
import makeStyles from '@material-ui/core/styles/makeStyles';
import NearMeIcon from '@material-ui/icons/Nearme';
import {  
    Paper,
    Grid,
    Box,
    Typography,
    GridList ,
    GridListTile,
    GridListTileBar ,
    IconButton 
} from '@material-ui/core';

export default function listaEscolas() {
    
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
            img: 'escola',
            title: 'Escola 1',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS-bull-trans-1.svg/1024px-NYCS-bull-trans-1.svg.png',
            width: '200px',
            height: '200px',
        },
        {
            img: 'escola2',
            title: 'Escola 2',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NYCS-bull-trans-2.svg/768px-NYCS-bull-trans-2.svg.png',
            width: '200px',
            height: '200px',
        },
        {
            img: 'Escola3',
            title: 'Escola 3',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/NYCS-bull-trans-3.svg/1200px-NYCS-bull-trans-3.svg.png',
            width: '200px',
            height: '200px',
        },

        {
            img: 'Escola4',
            title: 'Escola 4',
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
                Aqui estão as escolas mais próximas à sua localização.
                Clique nas imagens e verifique o que elas estão precisando.
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
                            <IconButton aria-label={`star ${tile.title}`} href="listadealunos">
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