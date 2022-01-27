import React from 'react';
import { Typography, Box } from '@mui/material';
;


const TitleBox = ({ boldText, text }) => {
  return (
        <Box textAlign='center' sx={{ zIndex: 10 }}>
            <Typography color='common.white' sx={ (theme) => ({
                fontSize: 36,
                fontWeight: theme.typography.fontWeightBold,
            })}>{boldText}</Typography>
            <Typography color='common.white' sx={ (theme) => ({
                fontWeight: theme.typography.fontWeightLight,
                fontSize: 44
            }) }>{text}</Typography>
        </Box>
    );
};

export default TitleBox;
