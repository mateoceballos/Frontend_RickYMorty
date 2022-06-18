import { FC } from "react";
import NextLink from "next/link";

import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { SearchOutlined, StarBorderOutlined } from "@mui/icons-material";

interface Props {
  setOpen?: any;
}

export const Navbar: FC<Props> = ({ setOpen }) => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Rick y Morty |</Typography>
            <Typography sx={{ ml: 0.5 }}>personajes</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <NextLink href="/category/episodios" passHref>
            <Link>
              <Button>Episodios</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/personajes" passHref>
            <Link>
              <Button>Personajes</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/ubicaciones" passHref>
            <Link>
              <Button>Ubicaciones</Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <NextLink href="/favorites" passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <StarBorderOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button onClick={() => setOpen(true)}>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};
