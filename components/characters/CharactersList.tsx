import { FC } from 'react'
import { Grid } from '@mui/material'
import { ICharacters } from '../../interfaces'
import { CharactersCard } from './CharactersCard'

interface Props {
    characters: ICharacters[];
}

export const CharactersList: FC<Props> = ({ characters }) => {

  return (
    <Grid container spacing={4}>
        {
            characters?.map( character => (
                <CharactersCard 
                    key={ character.id }
                    character={ character }
                />
            ))
        }
    </Grid>
  )
}
