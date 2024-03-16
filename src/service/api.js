import axios  from "axios";
// const url="https://forkify-api.herokuapp.com/api/search?q="

export const fetchRecipe= async(searchQuery)=>{
    const url = `https://forkify-api.herokuapp.com/api/search?q=${searchQuery}`;
    try {
     return await axios.get(url)
        
    } catch (error) {
        console.log('The error while getting the data is', error.message)
    }
}
export const fetchDetails= async(searchQuery)=>{
    const url = `https://forkify-api.herokuapp.com/api/get?rId=${searchQuery}`;
    try {
     return await axios.get(url)
        
    } catch (error) {
        console.log('The error while getting the Details is', error.message)
    }
}