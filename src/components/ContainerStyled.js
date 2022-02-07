import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

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

export default ContainerStyled