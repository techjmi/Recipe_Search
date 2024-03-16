
import React, { useEffect, useState } from 'react'
import Search from '../component/Search'
import List from '../component/List'
import { fetchRecipe } from '../service/api'
import Loader from '../component/Loader'
import { Typography } from '@mui/material'

const Recipe = () => {
  const [searchQuery, setSearchQuery] = useState('pizza')
  const [recipe, setRecipe] = useState([])
  const [loading, setLoading] = useState(true)


  const getResult = async () => {
    setLoading(true);
    try {
      const response = await fetchRecipe(searchQuery);
      if (response && response.status === 200) {
        setRecipe(response.data);
        setLoading(false);
      } else {
        setRecipe([]);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching recipe data:', error);
      setRecipe([]);
      setLoading(false);
    }
  };
  

  useEffect(() => {
    getResult()
  }, [searchQuery])

  return (
    <>
      {loading && <Loader />}
      <Search setSearchQuery={setSearchQuery} />
      {recipe?.recipes?.length > 0 ? (
        <List recipe={recipe} searchQuery={searchQuery} />
      ) : (
        <Typography variant='h5' sx={{fontWeight:"bold", textAlign:"center"}}>No data found for "{searchQuery}"</Typography>
      )}
    </>
  )
}

export default Recipe
