import React from "react";
import { InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import useSearchTerm from '../hooks/useSearchTerm'

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius * 100,
  backgroundColor: theme.palette.common.white,
  "&:hover": {
    backgroundColor: "#eee",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "auto",
  zIndex: 10,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "50%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 5),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 3),
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // color: theme.palette.primary.main,
  color: "#021C37",
  width: "100%",
  fontSize: theme.typography.h5.fontSize,
  "& .MuiInputBase-input": {
    padding: theme.spacing(4, 6, 4, 2),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(10)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  "& .MuiInputBase-input::placeholder": {
    color: alpha(theme.palette.primary.main, 0.95),
  },
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.body1.fontSize,
    "& .MuiInputBase-input": {
      padding: theme.spacing(2, 6, 2, 2),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(0.5em + ${theme.spacing(7)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
    },
  },
}));

const SearchBox = () => {
  const { searchTerm, setSearchTerm } = useSearchTerm()

  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon
          color="primary"
          sx={(theme) => ({
            fontSize: "3.2em",
            [theme.breakpoints.down("md")]: { fontSize: "2.2em" },
          })}
        />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Хайх нэрээ энд бичнэ үү"
        inputProps={{ "aria-label": "search" }}
        onChange={handleSearch}
        value={searchTerm}
      />
    </Search>
  );
};

export default SearchBox;
