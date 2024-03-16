import React from 'react'
import Header from '../component/Header'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <>
   <Header title='Our Recipes' bgClass="bg_Image">
<Button variant='contained' color='secondary' component={Link} to={"/recipe"}>SEARCH RECIPES</Button>
   </Header>
   </>
  )
}

export default Home
