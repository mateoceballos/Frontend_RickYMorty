import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';

import { MainLayout } from '../../components/layouts/MainLayout';
import { FavsList } from '../../components/favorits';

const FavsPage = () => {
  return (
    <MainLayout title='Favoritos - 3' pageDescription={'Favoritos'}>
        <Typography variant='h1' component='h1'>Favoritos</Typography>

        <Grid item xs={ 12 } sm={ 7 }>
            <FavsList editable />
        </Grid>


    </MainLayout>
  )
}

export default FavsPage;