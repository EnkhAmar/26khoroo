import React, { useEffect, useRef, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
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
	TitleBox,
	SearchBox,
	SelectOptions,
} from "../components";
import { HeaderBox } from "./Home";
import SvgBg from "./Frame.svg";
import data from "../db.json";
import SectionItem from "../components/SectionItem";

const boldTitle = "БАЯНЗҮРХ ДҮҮРГИЙН 26-Р ХОРООНЫ";
const title = "ХУДАЛДАА ҮЙЛЧИЛГЭЭНИЙ НЭГДСЭН МЭДЭЭЛЭЛ";

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
	const location = useLocation();
	const [page, setPage] = useState(1);
	const [section, setSection] = useState(params.slug ?? "");
	const prevPage = usePrevious(page);

	console.log(data);
	useEffect(() => {
		setPage(1);
	}, [location]);

	const handlePagination = (event, value) => {
		setPage(value);
		console.log("page " + value);
		// document.querySelector(".App div").scrollTo(0, 0)
	};

	const handleSectionChange = (event) => {
		setSection(event.targe.value);
	};

	console.log(params);
	const sectionIndex = data.sections.findIndex(
		(section) => section.slug === params.slug
	);

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
						<img
							src="https://i.ibb.co/c6kppzR/cropped-Webp-1.png"
							alt="logo"
							loading="lazy"
						/>
					</MuiLink>
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

				<img className="bg-art" src={SvgBg} alt="bg" loading="lazy" />
			</ContainerStyled>
			<GridContainerStyled container columnSpacing={0.1}>
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
					<FormControl
						fullWidth
						justifyContent="center"
						sx={{ minWidth: 100, maxWidth: 420 }}
					>
						<InputLabel id="sectionlabel">Ангилал</InputLabel>
						<Select
							labelId="section-label"
							id="section-select"
							value={section}
							onSelect={handleSectionChange}
							label="Ангилал сонгох"
						>
							{data.sections.map((item) => (
								<MenuItem key={item.slug} value={item.slug}>
									{item.title}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</CategoryBoxStyled>

				<Grid container spacing={4} mt={5}>
					{data.sections[sectionIndex].items
						.slice((page - 1) * size, page * size)
						.map((item, index) => (
							<SectionItem key={index} item={item} />
						))}
				</Grid>
			</Container>
			<Box display="flex" justifyContent="center" my={5}>
				<Pagination
					count={Math.ceil(data.sections[sectionIndex].items.length / size)}
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
