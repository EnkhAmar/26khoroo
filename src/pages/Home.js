import React from "react";
import { Paper, Box, Container, Link as MuiLink } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  TitleBox,
  SearchBox,
  CardContainer,
  ContainerStyled,
} from "../components";
import SvgBg from "./Frame.svg";
import data from "../db.json";

const boldTitle = "БАЯНЗҮРХ ДҮҮРГИЙН 26-Р ХОРООНЫ";
const title = "ХУДАЛДАА ҮЙЛЧИЛГЭЭНИЙ НЭГДСЭН МЭДЭЭЛЭЛ";

export const HeaderBox = ({ boldTitle, title }) => (
  <Container
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: "65vh",
      paddingTop: "2em",
    }}
  >
    <MuiLink component={RouterLink} to={`/`} underline="none">
      <img
        src="https://i.ibb.co/c6kppzR/cropped-Webp-1.png"
        alt="logo"
        loading="lazy"
      />
    </MuiLink>
    <TitleBox boldText={boldTitle} text={title} />
    <SearchBox />
  </Container>
);

const Home = () => {
  return (
    <React.Fragment>
      <ContainerStyled>
        <HeaderBox boldTitle={boldTitle} title={title} />

        <img className="bg-art" src={SvgBg} alt="bg" loading="lazy" />
      </ContainerStyled>

      <CardContainer />
    </React.Fragment>
  );
};

export default Home;
