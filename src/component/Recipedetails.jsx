import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchDetails } from "../service/api";
import Loader from "./Loader";
import { Box, Button, Grid, Stack, Typography, styled } from "@mui/material";
const BoxWrapper = styled(Box)({
  width: "80%",
  margin: "auto",
  display: "flex",
  // height:"73vh",

  marginTop: "15px",
  textAlign: "center",
});
const BoxImg = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  justifyContent: "center",
  width: "50%",
  padding: ".4rem 1.5rem",
  alignSelf:"self-start"
});
const BoxContent = styled(Box)({
  padding: ".4rem 1.5rem",
  padding: ".4rem 1.5rem",
  textAlign:"start"
});
//
const ButtonStyle= styled(Button)({
  textTransform:"none",
  borderRadius:"none",
  fontSize:"14px",
  padding:"3px 5px"
})
const Recipedetails = () => {
  const { recipeId } = useParams();
  const [loading, setloading] = useState(true);
  const [recipe, setRecipe] = useState({});
  // console.log(recipeId)
  const getDetials = async () => {
    setloading(true);
    const response = await fetchDetails(recipeId);
    // console.log("res from details", response.data.recipe);
    if (response.status === 200) {
      setRecipe(response.data.recipe);
      setloading(false);
    }
 
  };
  useEffect(() => {
    getDetials();
  }, []);
  return (
    <BoxWrapper className="details_box">
      {loading && <Loader />}
      <BoxImg className="details_left">
        <ButtonStyle
          variant="contained"
          style={{ alignSelf: "flex-start" }}
          component={Link}
          to={"/recipe"}
        >
          Back To Recipe List
        </ButtonStyle>
        <img src={recipe.image_url} alt="" width="300px" height="250px" className="details_image"/>
      </BoxImg>
      <BoxContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {recipe.title}
        </Typography>
        <p style={{marginBottom:"10px"}}>Provided By: {recipe.publisher}</p>
        <ButtonStyle
          variant="contained"
          color="secondary"
          href={recipe.publisher_url}
          target="_blank"
        >
          Publish Webpage
        </ButtonStyle>
        <ButtonStyle variant="contained" href={recipe.source_url}
          target="_blank" sx={{marginLeft:"15px"}}>
Recipe URL
        </ButtonStyle>
        <Typography sx={{mt:"20px", mb:"15px"}}>Ingredients</Typography>
        {
    recipe && Array.isArray(recipe.ingredients) && recipe.ingredients.map(data => {
        return (
            <Stack spacing={2} sx={{borderBottom:"1px solid black", padding:"3px 0"}}>
                <h4>{data}</h4>
            </Stack>
        );
    })
}


      </BoxContent>
    </BoxWrapper>
  );
};

export default Recipedetails;
