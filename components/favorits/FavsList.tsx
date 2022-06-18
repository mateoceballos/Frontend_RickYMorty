import { FC } from 'react';
import NextLink from 'next/link';
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';

import { get } from "../../services/favorites";

const response = get();
  console.log(response)
interface Props {
    editable?: boolean;
}

export const FavsList: FC<Props> = ({ editable = false }) => {

  return (
    <>
        {
            <Grid container spacing={2} key={ response?.id } sx={{ mb:1 }}>
                <Grid item xs={3}>
                    {/* TODO: llevar a la página del favorito */}
                    <NextLink href="/characters/[id]" passHref>
                        <Link>
                            <CardActionArea>
                                <CardMedia 
                                    image={ response.image }
                                    component='img'
                                    sx={{ borderRadius: '5px' }}
                                />
                            </CardActionArea>
                        </Link>
                    </NextLink>
                </Grid>
                <Grid item xs={7}>
                    <Box display='flex' flexDirection='column'>
                        <Typography variant='body1'>Nombre:</Typography>
                        <Typography variant='body1'>{ response.name }</Typography>

                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box display='flex' flexDirection='column'>
                        <Typography variant='body1'>Especie:</Typography>
                        <Typography variant='body1'>{ response.species }</Typography>

                    </Box>
                </Grid>
                <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                    <Typography variant='subtitle1'>{ response.status }</Typography>
                    
                    {
                        editable && (
                            <Button variant='text' color='secondary' >
                                Remover
                            </Button>
                        )
                    }
                </Grid>
            </Grid>
        }
    </>
  )
}
