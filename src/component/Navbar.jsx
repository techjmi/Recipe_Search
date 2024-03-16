import React from 'react'
import {AppBar, Box, Toolbar, Typography} from "@mui/material"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <>
   <AppBar position='sticky'>
    <Toolbar>
        <img src='logo.png' alt='' style={{width:"50px", height:"50px", borderRadius:"50%", marginRight:"20px"}}/>
        <Typography sx={{marginRight:"20px", textDecoration: 'none', color:"white"}} component={Link} to="/">Home</Typography>
<Typography sx={{marginRight:"20px", textDecoration: 'none', color:"white"}} component={Link} to="/recipe">Recipe</Typography>
    </Toolbar>
   </AppBar>
   </>
  )
}

export default Navbar
