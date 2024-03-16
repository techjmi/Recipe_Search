import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
const BoxButton = styled(Box)({
  display: "flex",
  gap: "10px",
  justifyContent: "space-between",
});
const ButtonStyle = styled(Button)({
  textTransform: "none",
  padding: "5px 15px",
  borderRadius: "3px",
});
const RecipeList = ({ array }) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={1} textAlign="center" className="list_box">
      {array.map((recipe, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card
            sx={{
              backgroundColor: "#F9F6EE",
              height: "300px",
              padding: "0 0 20px 0",
            }}
            className="image_class"
          >
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Box>
                <img
                  src={recipe.image_url}
                  alt="image"
                  width="200px"
                  height="150px"
                  className="list_image"
                />
                <Typography variant="h5" component="div">
                  {recipe.title.slice(0, 30) + "..."}
                </Typography>
                <Typography variant="body2">{recipe.publisher}</Typography>
              </Box>
              <BoxButton>
              <ButtonStyle variant="contained" size="small" component={Link} to={`/recipe/${recipe.recipe_id}`}>
  Details
</ButtonStyle>

                <ButtonStyle
                  variant="contained"
                  color="success"
                  href={recipe.source_url}
                  target="_blnk"
                >
                  Recipe URL
                </ButtonStyle>
              </BoxButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeList;
