import React, { useEffect, useRef, useState, } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Container, Grid, Typography, Box, Link, Pagination, Link as MuiLink, Select, MenuItem, } from '@mui/material';
import { ContainerStyled, TitleBox, SearchBox, SelectOptions, } from '../components';
import { HeaderBox } from './Home';
import SvgBg from './Frame.svg'
import data from '../db.json'
import SectionItem from '../components/SectionItem';
// import { styled } from '@mui/material/styles'
import { styled } from '@mui/system';
import { SelectUnstyled } from '@mui/base';
import { selectUnstyledClasses } from '@mui/base';
import { OptionUnstyled } from '@mui/base';
import { optionUnstyledClasses } from '@mui/base';
import { PopperUnstyled } from '@mui/base';




const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };
  
  const grey = {
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
  };
  
  const StyledButton = styled('button')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    min-width: 320px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 0.75em;
    margin: 0.5em;
    padding: 10px;
    text-align: left;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &.${selectUnstyledClasses.focusVisible} {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: '▴';
      }
    }
  
    &::after {
      content: '▾';
      float: right;
    }
    `,
  );
  
  const StyledListbox = styled('ul')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 5px;
    margin: 10px 0;
    min-width: 320px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 0.75em;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    overflow: auto;
    outline: 0px;
    `,
  );
  
  const StyledOption = styled(OptionUnstyled)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 0.45em;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    `,
  );
  
  const StyledPopper = styled(PopperUnstyled)`
    z-index: 1;
  `;
  
  const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
    const components = {
      Root: StyledButton,
      Listbox: StyledListbox,
      Popper: StyledPopper,
      ...props.components,
    };
  
    return <SelectUnstyled {...props} ref={ref} components={components} MenuProps={{ disableScrollLock: true }} />;
  });
  






const boldTitle = "БАЯНЗҮРХ ДҮҮРГИЙН 26-Р ХОРООНЫ"
const title = "ХУДАЛДАА ҮЙЛЧИЛГЭЭНИЙ НЭГДСЭН МЭДЭЭЛЭЛ"

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
                <CustomSelect defaultValue={10}>
                    <StyledOption value={10}>Ten</StyledOption>
                    <StyledOption value={20}>Twenty</StyledOption>
                    <StyledOption value={30}>Thirty</StyledOption>
                </CustomSelect>
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
