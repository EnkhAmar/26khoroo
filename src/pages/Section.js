import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Container, Grid, Typography, Box, Link, } from '@mui/material';
import { ContainerStyled, TitleBox, SearchBox, } from '../components';
import { HeaderBox } from './Home';
import SvgBg from './Frame.svg'

const boldTitle = "БАЯНЗҮРХ ДҮҮРГИЙН 26-Р ХОРООНЫ"
const title = "ХУДАЛДАА ҮЙЛЧИЛГЭЭНИЙ НЭГДСЭН МЭДЭЭЛЭЛ"

const DATA = [
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
    {name: ''},
]

let navigations = [];

var i,j, temporary, chunk = 4;
for (i = 0,j = DATA.length; i < j; i += chunk) {
    temporary = DATA.slice(i, i + chunk);
    // do whatever
    navigations.push(temporary)
}
console.log(navigations)

const Section = () => {
    let params = useParams();
    return (
        <React.Fragment>
            <ContainerStyled height={65}>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                minHeight: '65vh',
                paddingTop: '2em',
            }}>
                <img src='https://i.ibb.co/c6kppzR/cropped-Webp-1.png' alt='logo' loading='lazy' />
                <SearchBox  />
                <Typography color='common.white' sx={ (theme) => ({
                    zIndex: 10,
                    fontSize: 64,
                    fontWeight: theme.typography.fontWeightBold,
                })}>
                    Ангилал
                </Typography>
            </Container>

            <img className='bg-art' src={SvgBg} alt='bg' loading='lazy' />
            </ContainerStyled>
            <Grid container sx={{ zIndex: 10, minHeight: '20vh', backgroundColor: 'common.white', justifyContent: 'space-evenly' }}  columnSpacing={0.1}>
                {
                    navigations.map((col, index) => {
                        return (
                            <Grid item xs={2} key={index}>
                                {col.map((item, index) => (
                                    item.name &&
                                    <Link component={RouterLink} to='/' key={index} underline='none'>
                                        <Box sx={{ 
                                            width: '100%', 
                                            backgroundColor: 'primary.main', 
                                            height: '5vh', 
                                            display: 'flex', 
                                            justifyContent: 'center', 
                                            alignItems: 'center', 
                                            cursor: 'pointer',
                                            '&:hover': {
                                                color: 'red',
                                                backgroundColor: 'red',
                                                borderRadius: '1px solid white',
                                            }
                                        }}>
                                            <Typography textAlign='center' color='common.white' fontWeight='bolder' fontSize={14}>
                                                {item.name}    
                                            </Typography>
                                        </Box>
                                    </Link>
                                ))}
                            </Grid>
                        )
                    })
                }
            </Grid>    
            {params.slug}
        </React.Fragment>
    );
};

export default Section;
