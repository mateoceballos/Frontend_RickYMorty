import { FC, useMemo, useState } from "react";
import NextLink from "next/link";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
  Link,
} from "@mui/material";

import { ICharacters } from "../../interfaces";

interface Props {
  character: ICharacters;
}

export const CharactersCard: FC<Props> = ({ character }) => {

  const charactertImage = useMemo(() => {
    return (character.image)
  }, [character.image]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      sx={{
        display: "grid",
        alignItems: "stretch",
        gridTemplateRows: "1fr 100px",
      }}
    >
      <Card>
        <NextLink href="/characters/[id]" as={`/characters/${character.id}`} passHref prefetch={false}>
          <Link>
            <CardActionArea>
              <CardMedia
                component="img"
                className="fadeIn"
                image={charactertImage}
                alt={character.name}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>

      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{character.name}</Typography>
        <Typography fontWeight={500}>{character.species}</Typography>
      </Box>
    </Grid>
  );
};
