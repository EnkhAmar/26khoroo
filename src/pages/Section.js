import React, { useEffect, useRef, useState, } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Container, Grid, Typography, Box, Link, Pagination, Link as MuiLink, Select, MenuItem, InputLabel } from '@mui/material';
import styled from '@emotion/styled';
import { ContainerStyled, TitleBox, SearchBox, SelectOptions, } from '../components';
import { HeaderBox } from './Home';
import SvgBg from './Frame.svg'
import data from '../db.json'
import SectionItem from '../components/SectionItem';

const boldTitle = "БАЯНЗҮРХ ДҮҮРГИЙН 26-Р ХОРООНЫ"
const title = "ХУДАЛДАА ҮЙЛЧИЛГЭЭНИЙ НЭГДСЭН МЭДЭЭЛЭЛ"

const SelectStyled = styled(Select)(({ theme }) => ({
    border: `4px solid ${theme.palette.primary.main}`,
    borderRadius: '1.75em',
    minHeight: 'calc(1.5em + 22px)',
    minWidth: '320px',
}))

const MenuItemStyled = styled(MenuItem)(({ theme }) => ({

}))

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

// const DATA = [
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: 'БАРАА, БҮТЭЭГДЭХҮҮН'},
//     {name: ''},
// ]

let navigations = [];

var i, j, temporary, chunk = 4;
for (i = 0, j = data.sections.length; i < j; i += chunk) {
    temporary = data.sections.slice(i, i + chunk);
    // do whatever
    navigations.push(temporary)
}

const size = 10


const Section = ({ match }) => {
    let params = useParams();
    const location = useLocation();
    const [page, setPage] = useState(1);
    const prevPage = usePrevious(page);

    console.log(data)
    useEffect(() => {
        setPage(1)
    }, [location])

    const handlePagination = (event, value) => {
        setPage(value)
        console.log('page ' + value)
        // document.querySelector(".App div").scrollTo(0, 0)
    }
    console.log(params)
    const sectionIndex = data.sections.findIndex(section => section.slug === params.slug)

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
                    <MuiLink
                        component={RouterLink}
                        to={`/`}
                        underline='none'
                    >
                        <img src='https://i.ibb.co/c6kppzR/cropped-Webp-1.png' alt='logo' loading='lazy' />
                    </MuiLink>
                    <SearchBox />
                    <Typography color='common.white' sx={(theme) => ({
                        zIndex: 10,
                        fontSize: 64,
                        fontWeight: theme.typography.fontWeightBold,
                    })}>
                        Ангилал
                    </Typography>
                </Container>

                <img className='bg-art' src={SvgBg} alt='bg' loading='lazy' />
            </ContainerStyled>
            <Grid container sx={{ zIndex: 10, minHeight: '20vh', backgroundColor: 'common.white', justifyContent: 'space-evenly' }} columnSpacing={0.1}>
                {
                    navigations.map((col, index) => {
                        return (
                            <Grid item xs={2} key={index}>
                                {col.map((item, index) => (
                                    item.title &&
                                    <Link component={RouterLink} to={`/sections/${item.slug}`} key={index} underline='none'>
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
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    </Link>
                                ))}
                            </Grid>
                        )
                    })
                }
            </Grid>

            <Container maxWidth='md'>

            <Box>
                <InputLabel id="label">Age</InputLabel>
                <Select labelId="label" id="select" value="20">
                    <MenuItem value="10">Ten</MenuItem>
                    <MenuItem value="20">Twenty</MenuItem>
                </Select>

                <SelectStyled labelId="label" id="select-styled" value="20">
                    <MenuItemStyled value="10">Ten</MenuItemStyled>
                    <MenuItemStyled value="20">Twenty</MenuItemStyled>
                </SelectStyled>

                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>

                <SelectOptions />
            </Box>

                <Grid container spacing={4} mt={5}>
                    {data.sections[sectionIndex].items.slice((page - 1) * size, page * size).map((item, index) => (
                        <SectionItem key={index} item={item} />
                    ))}
                </Grid>
            </Container>
            <Box display="flex" justifyContent="center" my={5} >
                <Pagination count={Math.ceil(data.sections[sectionIndex].items.length / size)} page={page} shape="rounded" color="primary" onChange={handlePagination} />
            </Box>
        </React.Fragment>
    );
};

export default Section;
