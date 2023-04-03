import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OneCocktail = () => {
  const { id } = useParams();

  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    (async () => {
      const cocktailsResponse = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      console.log(cocktailsResponse);
      const cocktailsData = await cocktailsResponse.json();
      console.log(cocktailsData);

      setCocktail(cocktailsData.drinks[0]);
    })();
  }, []);
  return (
    <section>
      <Card sx={{ width: 1200, margin: "auto" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="600"
            image={cocktail.strDrinkThumb}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cocktail.strDrink}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {cocktail.strCategory}
            </Typography>
            <ul>
              {cocktail.strIngredient1 != null &&
                cocktail.strIngredient1 !== "" && (
                  <li>{cocktail.strIngredient1}</li>
                )}
              {cocktail.strIngredient2 != null &&
                cocktail.strIngredient2 !== "" && (
                  <li>{cocktail.strIngredient2}</li>
                )}
              {cocktail.strIngredient3 != null &&
                cocktail.strIngredient3 !== "" && (
                  <li>{cocktail.strIngredient3}</li>
                )}
              {cocktail.strIngredient4 != null &&
                cocktail.strIngredient4 !== "" && (
                  <li>{cocktail.strIngredient4}</li>
                )}
              {cocktail.strIngredient5 != null &&
                cocktail.strIngredient5 !== "" && (
                  <li>{cocktail.strIngredient5}</li>
                )}
              {cocktail.strIngredient6 != null &&
                cocktail.strIngredient6 !== "" && (
                  <li>{cocktail.strIngredient6}</li>
                )}
              {cocktail.strIngredient7 != null &&
                cocktail.strIngredient7 !== "" && (
                  <li>{cocktail.strIngredient7}</li>
                )}
              {cocktail.strIngredient8 != null &&
                cocktail.strIngredient8 !== "" && (
                  <li>{cocktail.strIngredient8}</li>
                )}
              {cocktail.strIngredient9 != null &&
                cocktail.strIngredient9 !== "" && (
                  <li>{cocktail.strIngredient9}</li>
                )}
              {cocktail.strIngredient10 != null &&
                cocktail.strIngredient10 !== "" && (
                  <li>{cocktail.strIngredient10}</li>
                )}
            </ul>
          </CardContent>
        </CardActionArea>
      </Card>
    </section>
  );
};

export default OneCocktail;
