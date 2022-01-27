import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import data from '../db.json'

const SectionCard = ({ card }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardMedia component='img' sx={{ height: 256 }} image={card.image} alt={card.slug} />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
} 

const CardContainer = () => {
    return (
        <Container sx={{ py: 8 }} maxWidth='xl'>
            <Grid container spacing={4}>
                {data.sections.map(section => (
                    <SectionCard key={section.slug} card={section} />
                ))}
            </Grid>
       </Container>
    )
};

export default CardContainer;
