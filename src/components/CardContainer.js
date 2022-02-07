import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';
import data from '../db.json'

const CardImage = styled(Box)(({ theme }) => ({
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    paddingTop: '56.25%',
    backgroundImage: 'url("https://source.unsplash.com/random")',
}))

const SectionCard = ({ card }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <MuiLink
                component={Link}
                to={`sections/${card.slug}`}
                underline='none'
            >
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                    <CardMedia component='div' sx={{ paddingTop: '56.25%' }} image={card.image} alt={card.slug} />
                    {/* <CardImage /> */}
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {card.title}
                        </Typography>
                    </CardContent>
                </Card>
            </MuiLink>
        </Grid>
    )
} 

const CardContainer = () => {
    return (
        <Container sx={{ py: 8 }} maxWidth='lg'>
            <Grid container spacing={4}>
                {data.sections.map(section => (
                    <SectionCard key={section.slug} card={section} />
                ))}
            </Grid>
       </Container>
    )
};

export default CardContainer;
