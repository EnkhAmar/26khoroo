import React from 'react';
import { Box } from '@mui/material';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<Box sx={{ minHeight: '100vh' }} classaName="layout">
			{children}
			<Footer title="RE/MAX PEAK" description="БАЯНЗҮРХ ДҮҮРГИЙН 26-Р ХОРООНЫ ОРШИН СУУГЧИДДАА ЗОРИУЛАН БҮТЭЭВ" url='https://www.facebook.com/remaxpeakinmongolia' />
		</Box>
	);
};

export default Layout;
