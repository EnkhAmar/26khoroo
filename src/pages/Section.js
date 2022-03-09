import React, { useEffect, useRef, useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  Pagination,
  Link as MuiLink,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ContainerStyled,
  // TitleBox,
  SearchBox,
  SelectOptions,
} from "../components";
import { HeaderBox } from "./Home";
import useSearchTerm from "../hooks/useSearchTerm";
import SvgBg from "./Frame.svg";
import SvgBgSmall from "./Small-Device-Frame.svg";
import data from "../db.json";
import SectionItem from "../components/SectionItem";

const boldTitle = "БАЯНЗҮРХ ДҮҮРГИЙН 26-Р ХОРООНЫ";
const title = "ХУДАЛДАА ҮЙЛЧИЛГЭЭНИЙ НЭГДСЭН МЭДЭЭЛЭЛ";


// const searchFilters = ["title", "excerpt", "slug", "phone1", "phone2", "fbName", "address"];
const searchFilters = ["title", "slug", "phone1", "phone2", "fbName", "address"];
const filterData = (searchPattern, data, sectionIndex,) => {
  let filterArray = data.sections[sectionIndex].items.filter(item => item.title).map(item => {
    if ((item.excerpt.toLocaleLowerCase().search(searchPattern) !== -1) || (item.title.toLocaleLowerCase().search(searchPattern) !== -1)) {
      return item
    }
  })

  if (searchPattern !== "") {
    const result = new Set()
    data.sections.forEach(section => {
      if ("items" in section ) {
        for (const item of section.items)
          for (const key in item)
            if (searchFilters.includes(key) && (item[key].toLowerCase().search(searchPattern) !== -1))
              result.add(item)
      }
    })
    filterArray = Array.from(result).sort((a, b) => {
      let aSlug = a['slug'] ? 1 : 0, bSlug = b['slug'] ? 1 : 0
      return aSlug < bSlug ? 1 : -1
    })
  }
  return filterArray
}

const TitleBox = ({ boldText, text }) => {
  return (
    <Box textAlign="center" sx={{ zIndex: 10 }}>
      <Typography
        color="common.white"
        sx={(theme) => ({
          fontSize: "1em",
          fontWeight: theme.typography.fontWeightBold,
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
        })}
      >
        {boldText}
      </Typography>
      <Typography
        color="common.white"
        sx={(theme) => ({
          fontWeight: theme.typography.fontWeightLight,
          fontSize: "1.25em",
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
        })}
      >
        {text}
      </Typography>
    </Box>
  );
};

const SelectStyled = styled(Select)(({ theme }) => ({
  border: `4px solid ${theme.palette.primary.main}`,
  borderRadius: "1.75em",
  minHeight: "calc(1.5em + 22px)",
  minWidth: "320px",
}));

const MenuItemStyled = styled(MenuItem)(({ theme }) => ({}));

const GridContainerStyled = styled(Grid)(({ theme }) => ({
  zIndex: 10,
  minHeight: "20vh",
  backgroundColor: "common.white",
  justifyContent: "space-evenly",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const CategoryBoxStyled = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

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
var i,
  j,
  temporary,
  chunk = 4;
for (i = 0, j = data.sections.length; i < j; i += chunk) {
  temporary = data.sections.slice(i, i + chunk);
  // do whatever
  navigations.push(temporary);
}

const size = 10;

const Section = ({ match }) => {
  let params = useParams();
  let navigate = useNavigate();
  const { searchPattern } = useSearchTerm()
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [section, setSection] = useState(params.slug ?? "");
  const prevPage = usePrevious(page);

  useEffect(() => {
    setPage(1);
  }, [location]);

  const handlePagination = (event, value) => {
    setPage(value);
    // document.querySelector(".App div").scrollTo(0, 0)
  };

  const handleSectionChange = (event) => {
    setSection(event.target.value);
    navigate(`/sections/${event.target.value}`);
  };

  const sectionIndex = data.sections.findIndex(
    (section) => section.slug === params.slug
  );

  if (sectionIndex < 0) {
    return <h1>404 LOL</h1>;
  }

  let filterArray = filterData(searchPattern, data, sectionIndex)

  return (
    <React.Fragment>
      <ContainerStyled height={65}>
        <Container
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "65vh",
            paddingTop: "2em",
            [theme.breakpoints.down("md")]: {
              paddingTop: "0.5em",
              justifyContent: "space-evenly",
            },
          })}
        >
          <MuiLink component={RouterLink} to={`/`} underline="none">
            <Box
              component="img"
              src="https://i.ibb.co/c6kppzR/cropped-Webp-1.png"
              alt="logo"
              loading="lazy"
              sx={(theme) => ({
                width: "74px",
                [theme.breakpoints.up("sm")]: {
                  width: "auto",
                },
              })}
            />
          </MuiLink>
          <TitleBox boldText={boldTitle} text={title} />
          <SearchBox />
          <Typography
            color="common.white"
            sx={(theme) => ({
              zIndex: 10,
              fontSize: 64,
              fontWeight: theme.typography.fontWeightBold,
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            })}
          >
            Ангилал
          </Typography>
        </Container>

        {/* <img className="bg-art" src={SvgBg} alt="bg" loading="lazy" /> */}
        <Box component="picture" className="bg-art">
          <Box
            component="source"
            media="(max-width:650px)"
            srcSet={SvgBgSmall}
          />
          <Box component="img" src={SvgBg} alt="bg" loading="lazy" />
        </Box>
      </ContainerStyled>
      <GridContainerStyled container columnSpacing={0.2}>
        {navigations.map((col, index) => {
          return (
            <Grid item xs={2} key={index}>
              {col.map(
                (item, index) =>
                  item.title && (
                    <Link
                      component={RouterLink}
                      to={`/sections/${item.slug}`}
                      key={index}
                      underline="none"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          backgroundColor: "primary.main",
                          height: "5vh",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer",
                          "&:hover": {
                            color: "red",
                            backgroundColor: "red",
                            borderRadius: "1px solid white",
                          },
                        }}
                      >
                        <Typography
                          textAlign="center"
                          color="common.white"
                          fontWeight="bolder"
                          fontSize={14}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                    </Link>
                  )
              )}
            </Grid>
          );
        })}
      </GridContainerStyled>

      <Container maxWidth="md">
        <CategoryBoxStyled
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          my={5}
        >
          <Typography
            color="primary.main"
            textTransform="uppercase"
            sx={(theme) => ({
              fontSize: 32,
              fontWeight: theme.typography.fontWeightBold,
              mb: 3,
            })}
          >
            Ангилал сонгох
          </Typography>
          <FormControl fullWidth sx={{ minWidth: 100, maxWidth: 420 }}>
            <InputLabel id="sectionlabel">Ангилал</InputLabel>
            <Select
              labelId="section-label"
              id="section-select"
              value={section}
              onChange={handleSectionChange}
              label="Ангилал сонгох"
            >
              {data.sections.map((item, key) => (
                <MenuItem key={`${item.slug}${key}`} value={item.slug}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </CategoryBoxStyled>

        <Grid container spacing={4} mt={5}>
          {filterArray
            .slice((page - 1) * size, page * size)
            .map((item, index) => (
              <SectionItem key={index} item={item} />
            ))}
        </Grid>
      </Container>
      <Box display="flex" justifyContent="center" my={5}>
        <Pagination
          count={Math.ceil(filterArray.length / size)}
          page={page}
          shape="rounded"
          color="primary"
          onChange={handlePagination}
        />
      </Box>
    </React.Fragment>
  );
};

export default Section;
