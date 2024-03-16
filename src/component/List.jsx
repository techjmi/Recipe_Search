import { Box, Card, CardContent, Grid, Typography, styled } from '@mui/material';
import React from 'react';
import RecipeList from './RecipeList';
const BoxStyle=styled(Box)({
    width:"86%",
    margin:"auto",
    // backgroundColor:"bisque"
})
const List = ({ recipe ,searchQuery}) => {
    // console.log(searchQuery)
    if (!recipe || !recipe.recipes) {
        return <div>No recipes found</div>;
    }

    const array = recipe.recipes;
    return (
        <BoxStyle className='box'>
            <Typography variant='h6' sx={{mb:"15px", textAlign:"center"}}>Recipe List for <span style={{fontWeight:"bold"}}>{searchQuery}</span> </Typography>
      <RecipeList array={array}/>
        </BoxStyle>
      
    );
};

export default List;
