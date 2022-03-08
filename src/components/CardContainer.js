import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Link as MuiLink,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import useSearchTerm from "../hooks/useSearchTerm";
import data from "../db.json";

const CardImage = styled(Box)(({ theme }) => ({
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  paddingTop: "56.25%",
  backgroundImage: 'url("https://source.unsplash.com/random")',
}));

const SectionCard = ({ card }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <MuiLink component={Link} to={`sections/${card.slug}`} underline="none">
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="div"
            sx={{ paddingTop: "56.25%" }}
            image={card.image}
            alt={card.slug}
          />
          {/* <CardImage /> */}
          <CardContent
            sx={{
              flexGrow: 1,
              bgcolor: "primary.main",
              padding: 1,
              "&:last-child": { paddingBottom: 1 },
            }}
          >
            <Typography
              variant="subtitle1"
              component="h2"
              color="common.white"
              textTransform="uppercase"
              fontWeight="900"
              textAlign="center"
            >
              {card.title}
            </Typography>
          </CardContent>
        </Card>
      </MuiLink>
    </Grid>
  );
};

const CardContainer = () => {
  const { searchPattern } = useSearchTerm();
  let arr = [];

  data.sections
    .filter((item) => item.title)
    .forEach((item) => {
      if (
        item.excerpt.toLocaleLowerCase().search(searchPattern) !== -1 ||
        item.title.toLocaleLowerCase().search(searchPattern) !== -1
      ) {
        arr.push(item);
      }
    });

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {arr.map((section) => (
          <SectionCard key={section.slug} card={section} />
        ))}
      </Grid>
    </Container>
  );
};

export default CardContainer;
