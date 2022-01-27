import React from 'react';
import { Box } from '@mui/material';
;


const Layout = ({ children }) => {
  return <Box sx={{ minHeight: '100vh' }} classaName="layout">{children}</Box>;
};

export default Layout;
