import { Box, Typography, styled } from "@mui/material";
import React from "react";
const BoxWrapper = styled(Box)({
  width: "86%",
  margin: "auto",
  display: "flex",
  backgroundColor: "rosybrown",
  padding: ".5rem 0 2rem 0",
  justifyContent: "space-between",
});

const BoxMain = styled(Box)({
    width: "100%",
    backgroundColor: "black",
    position: "relative",
    bottom:0,
    // marginBottom:0
  });
  
const Footer = () => {
  return (
    <BoxMain>
      <BoxWrapper>
        <Box>
          <Typography>
            Designed By: <br />
            <a
              href="https://chic-lollipop-cd173a.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Md Shamim Akhter
            </a>
          </Typography>
        </Box>
        <Box>Right</Box>
      </BoxWrapper>
    </BoxMain>
  );
};

export default Footer;
