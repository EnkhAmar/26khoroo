import React from "react";
import { Typography, Box } from "@mui/material";
const TitleBox = ({ boldText, text }) => {
  return (
    <Box textAlign="center" sx={{ zIndex: 10 }}>
      <Typography
        color="common.white"
        sx={(theme) => ({
          // fontSize: 36,
          fontSize: "2.25em",
          fontWeight: theme.typography.fontWeightBold,
          [theme.breakpoints.down("md")]: {
            fontSize: "1em",
          },
        })}
      >
        {boldText}
      </Typography>
      <Typography
        color="common.white"
        sx={(theme) => ({
          fontWeight: theme.typography.fontWeightLight,
          fontSize: "2.75em",
          [theme.breakpoints.down("md")]: {
            fontSize: "1.25em",
          },
        })}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default TitleBox;
