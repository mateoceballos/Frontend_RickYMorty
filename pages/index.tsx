import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import { useQuery } from "@apollo/client";
import { MainLayout } from '../components/layouts';
import { GET_CHARACTERS } from '../services/get_characters'
import { CharactersList } from '../components/characters';

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS);
  if (data)console.log(data);
  
  if (loading) return <p> Loading ...</p>;
  if (error) return <h2>Error</h2>;

  return (
    <MainLayout title={'Rick & Morty - Home'} pageDescription={'Encuentra 20 personajes de Rick & Morty'}>
        <Typography variant='h1' component='h1'>Personajes</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Todos los personajes</Typography>

        {data?.characters?.results && (
          <CharactersList 
          characters={ data?.characters?.results as any }
        />
        )}
    

    </MainLayout>
  )
}

export default Home
