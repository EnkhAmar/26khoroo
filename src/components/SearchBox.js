import React from 'react';
import { InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius * 100,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: '#eee',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: 'auto',
    zIndex: 10,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '50%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 5),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    fontSize: theme.typography.h5.fontSize,
    '& .MuiInputBase-input': {
      padding: theme.spacing(4, 6, 4, 2),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(10)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
    '& .MuiInputBase-input::placeholder': {
        color: alpha(theme.palette.primary.main, 0.95),
    }
}));

const SearchBox = () => {
  return (
    <Search>
        <SearchIconWrapper>
            <SearchIcon color='primary' sx={{ fontSize: '3.2em' }} />
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Хайх нэрээ энд бичнэ үү"
            inputProps={{ 'aria-label': 'search' }}
        />
    </Search>
  );
};

export default SearchBox;
