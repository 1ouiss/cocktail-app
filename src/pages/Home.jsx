import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    (async () => {
      const cocktailsResponse = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s"
      );
      const cocktailsData = await cocktailsResponse.json();

      setCocktails(cocktailsData.drinks);
    })();
  }, []);

  const navigate = useNavigate();

  return (
    <main>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          overflow: "hidden",
          bgcolor: "background.paper",
          gap: 2,
        }}
      >
        {cocktails.length === 0 && <p>Loading...</p>}
        {cocktails.slice(0, 6).map((cocktail) => (
          <Card sx={{ width: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={cocktail.strDrinkThumb}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {cocktail.strDrink}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            navigate(`/cocktails`);
          }}
        >
          Voir plus
        </Button>
      </Box>
    </main>
  );
};

export default Home;
