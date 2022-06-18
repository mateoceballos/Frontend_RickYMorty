import { useRouter } from "next/router";
import { Box, Button, Grid, Typography, CardMedia, IconButton } from '@mui/material';
import { StarBorderOutlined } from "@mui/icons-material";
import { MainLayout } from '../../components/layouts';
import { CharactersSlideshow } from '../../components/characters';
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS_ID } from '../../services/get_character_byid'
import { post } from "../../services/favorites";


const CharacterPage = () => {
  
const router = useRouter();
const { id } = router.query;


  const { data, loading, error } = useQuery(GET_CHARACTERS_ID, {
    variables: { ids: id }
  })
  console.log('prueba dataa gral', data);
  console.log('gral apuntado', data?.charactersByIds[0]);

  const favoritesAdd = async ()=>{
    console.log(id);

  const response = await post(data);
  console.log(response)
    // if (!response?.status === 201) {
    //   return alert("Error al guardar los datos");
    // }
  }

  if (loading) return <p> Loading ...</p>;
  if (error) return <h2>Error</h2>;
  return (
    <MainLayout title={ data.title } pageDescription={ data.description }>
              {(data?.charactersByIds.length > 0 && (
        <Grid
          container
          className="GridContainer GridDetail"
          sx={{
            gridTemplateColumns: { xs: "1fr", sm: "2.1fr 1fr" },
            gridTemplateRows: { xs: "max-content", sm: "500px" },
            gridGap: { xs: "8vw", sm: "1fr" },
          }}
        >
          <Box>

              <CardMedia
                component="img"
                image={
                  data?.charactersByIds[0]?.image ||
                  "http://http2.mlstatic.com/D_705353-MLA45385615359_032021-O.jpg"
                }
                alt={`${ data?.charactersByIds[0]?.name || ""}`}
              />

          </Box>
          <Box
            sx={{
              position: { xs: "inital", sm: "sticky" },
              top: "100px",
              alignSelf: "start",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography gutterBottom>
              {"Nombre:"}
            </Typography>
            <Typography sx={{ fontWeight: 500 }} variant="h4" gutterBottom>
              {data?.charactersByIds[0]?.name || ""}
            </Typography>
            <Typography gutterBottom>
              {"Se encuentra:"}
            </Typography>
            <Typography sx={{ fontWeight: 500 }} variant="h4" gutterBottom>
              {data?.charactersByIds[0]?.status || ""}
            </Typography>
            <Typography gutterBottom>
              {"Especie:"}
            </Typography>
            <Typography sx={{ fontWeight: 500 }} variant="h4" gutterBottom>
              {data?.charactersByIds[0]?.species || ""}
            </Typography>
            <Typography gutterBottom>
              {"Genero:"}
            </Typography>
            <Typography sx={{ fontWeight: 500 }} variant="h4" gutterBottom>
              {data?.charactersByIds[0]?.gender || ""}
            </Typography>
            <Typography gutterBottom>
              {"Origen:"}
            </Typography>
            <Typography sx={{ fontWeight: 500 }} variant="h4" gutterBottom>
              {data?.charactersByIds[0]?.origin?.name || ""}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Descripción del favorito
            </Typography>
            <Typography variant="body1" sx={{ color: "#7e7d7d" }}>
              {data?.charactersByIds[0]?.description || ""}
            </Typography>
            <Button variant="contained" startIcon={<StarBorderOutlined />} onClick={favoritesAdd}>
              Agregar a favoritos
            </Button>
          </Box>
        </Grid>
      )) ||
        (loading && <h1>Cargando</h1>)}
    </MainLayout>
  )
}

export default CharacterPage