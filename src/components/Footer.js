import React from 'react';
import { Box, Container, Typography, Link, } from '@mui/material';

const Footer = ({ title, description, url }) => {
	return (
		<Box component="footer" sx={{ bgcolor: 'primary.main', py: 6 }}>
			<Container maxWidth="lg">
				<Typography
					variant="body2"
					align="center"
					color="common.white"
					component="p"
                    sx={{ fontWeight: 100 }}
				>
					{description}
				</Typography>
				<Typography variant="h6" align="center" gutterBottom color='common.white'>
					{' © '} <Link color='inherit' href={url} underline='hover' target="_blank" rel="noreferrer">{title}</Link>
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;
