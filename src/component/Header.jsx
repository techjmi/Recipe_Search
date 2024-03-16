import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
const TypoStyle= styled(Typography)({
    color:"white",
    fontSize: "80px",
    marginBottom: "32px"
})
const BoxContent= styled(Box)({
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
})
const Header = (props) => {
  return (
    <div className={props.bgClass}>
        <BoxContent>
        <TypoStyle className='header_home'>{props.title}</TypoStyle>
    {props.children}
        </BoxContent>
   
    </div>
  )
}

export default Header
