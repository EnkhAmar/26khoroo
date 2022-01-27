import React from 'react';
import { Paper, Box, Container, } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TitleBox, SearchBox, CardContainer } from '../components';
import SvgBg from './Frame.svg'
import data from '../db.json'

const boldTitle = "БАЯНЗҮРХ ДҮҮРГИЙН 26-Р ХОРООНЫ"
const title = "ХУДАЛДАА ҮЙЛЧИЛГЭЭНИЙ НЭГДСЭН МЭДЭЭЛЭЛ"


const ContainerStyled = styled(Box)(({ theme }) => ({
    minHeight: '85vh',
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    '& .bg-art': {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        zIndex: '1',
    }
}))

const Home = () => {

    return (
        <React.Fragment>
            <ContainerStyled>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    minHeight: '65vh',
                    paddingTop: '2em',
                }}>
                    <img src='https://i.ibb.co/c6kppzR/cropped-Webp-1.png' alt='logo' loading='lazy' />
                    <TitleBox boldText={boldTitle} text={title} />
                    <SearchBox  />
                </Container>

                <img className='bg-art' src={SvgBg} alt='bg' loading='lazy' />
            </ContainerStyled>
            
            <CardContainer />
        </React.Fragment>
    );
};

export default Home;
