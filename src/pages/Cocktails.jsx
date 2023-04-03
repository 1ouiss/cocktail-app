import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const cocktailsResponse = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s"
      );
      const cocktailsData = await cocktailsResponse.json();

      setCocktails(cocktailsData.drinks);
    })();
  }, []);

  return (
    <section>
      {cocktails.length === 0 && <p>Loading...</p>}
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
        {cocktails.map((cocktail) => (
          <Card
            sx={{ width: 345 }}
            onClick={() => {
              navigate(`/cocktail/${cocktail.idDrink}`);
            }}
          >
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
    </section>
  );
};

export default Cocktails;
