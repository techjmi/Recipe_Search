import {
    Box,
    Container,
    FormControl,
    Grid,
    Input,
    Paper,
    TextField,
    Typography,
    styled,
  } from "@mui/material";
  import React, { useState } from "react";
  import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
  
  const BoxStyle = styled(Box)({
    width: "50%",
    margin: "20px auto",
    textAlign: "center",
  });
  
  const FormControlStyle = styled(FormControl)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 5px 10px;
    width: fit-content;
    margin: 10px auto;
  `;
  
  const Search = ({ setSearchQuery }) => {
    const [value, setValue] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setSearchQuery(value);
    };
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
//   console.log("shamim")
    return (
      <BoxStyle className="search_box">
        <Typography variant="h4" sx={{ textAlign: "center", mb: "10px" }}>
          Search Recipe With &nbsp;<span style={{ color: "blue" }}>Our Recipe</span>
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          Input Recipe ,Press Enter
        </Typography>
       
        <form onSubmit={handleSubmit}>
        <FormControlStyle>
            <Input
              className="search-input"
              disableUnderline
              placeholder="tomato, potato, pizza"
              sx={{ borderRadius: "10px" , cursor:"pointer"}}
              onChange={handleChange}
              value={value}
            />
            <SearchRoundedIcon />
            </FormControlStyle>
        </form>
      
      </BoxStyle>
    );
  };
  
  export default Search;
  