import { Card, CardContent, Grid, Typography, Box, Button, CardActions, CardMedia, Link, } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Phone, Facebook, } from '@mui/icons-material'

const CardImageBox = styled('div')(({ theme }) => ({
    width: 'auto',
    height: 'auto',
    flexShrink: 0,
    [theme.breakpoints.up('sm')]: {
        width: 256,
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

const Img = styled("img")(({ theme }) => ({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
}))

const CardActionBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "space-between",
    rowGap: theme.spacing(1),
    columnGap: theme.spacing(2),
    "& button": {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
}))


export default function SectionItem(props) {
    const { item } = props

    return (
        <Grid item xs={12} md={12}>
            <Card sx={{ display: 'flex', border: '2px solid #0B447E' }} elevation={0}>
                <CardMedia
                    component='img'
                    sx={{ width: '40%', display: 'block', maxHeight: 220, }}
                    image={item.image ?? 'https://i.ibb.co/6v1FtBY/download.png'}
                    alt='logo'
                />
                <CardContent sx={{ flex: 1, pl: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography component='h2' variant='h5' textTransform='uppercase' color='primary' fontWeight="bold" gutterBottom mb={1}>
                        {item.title}
                    </Typography>
                    <Typography variant="body2" textTransform='uppercase' color='primary' mb={1}>
                        {item.address}
                    </Typography>
                    <CardActions sx={{ pl: 0, }}>
                        {item.phone1 &&
                            <Button size='small' color='primary' variant='contained' sx={{ px: 4, py: 0.5, borderRadius: 0, }} disableElevation>
                                <Box component='a' href={`tel:+976${item.phone1}`} target="_blank" rel="noreferrer" sx={{
                                    textDecoration: 'none',
                                }}>
                                    <Typography variant='subtitle1' sx={{ fontWeight: 700, }} color="common.white" >
                                        {item.phone1}
                                    </Typography>
                                </Box>
                            </Button>}
                        {item.phone2 &&
                            <Button size='small' color='primary' variant='contained' sx={{ px: 4, py: 0.5, borderRadius: 0, }} disableElevation>
                                <Box component='a' href={`tel:+976${item.phone1}`} target="_blank" rel="noreferrer" sx={{
                                    textDecoration: 'none',
                                }}>
                                    <Typography variant='subtitle1' sx={{ fontWeight: 700, }} color="common.white" >
                                        {item.phone2}
                                    </Typography>
                                </Box>
                            </Button>}
                    </CardActions>
                    <CardActions sx={{ pl: 0, }}>
                        {item.fbLink &&
                            <Button size='small' color='primary' variant='outlined' sx={{ px: 4, py: 0.5, textTransform: 'none', }} disableElevation>
                                <Box component='a' href={item.fbLink} target="_blank" rel="noreferrer" sx={{
                                    textDecoration: 'none',
                                    color: '#0B447E',
                                    '&:visited': {
                                        color: '#0B447E'
                                    } 
                                }}>
                                    <Typography variant='subtitle1' sx={{ fontWeight: 700, }}>
                                        Facebook page
                                    </Typography>
                                </Box>
                            </Button>}
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
    )

    return (
        <Grid item xs={12} md={12}>
            <Card >
                <CardImageBox>
                    <Img alt='complex' src={item.image ?? "https://i.ibb.co/6v1FtBY/download.png"} />
                </CardImageBox>

                <div sx={{ flex: 1 }}>
                    <CardContent>
                        <Typography component='h2' variant='h5'>
                            {item.title}
                        </Typography>
                        <Typography variant='subtitle1' color='textSecondary' sx={{ display: 'flex' }}>
                            {item.address}
                        </Typography>
                        <CardActionBox>
                            {item.phone1 &&
                                <Button size="small" color="primary" variant="outlined">
                                    <a href={`tel:+976${item.phone1}`} target="_blank" rel="noreferrer" sx={{
                                        display: "flex",
                                        textDecoration: "none",
                                        color: "#3f51b5",
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        minWidth: "110px",
                                    }}><Phone sx={{ marginRight: "10px" }} /> {item.phone1}</a>
                                </Button>
                            }
                            {item.phone2 &&
                                <Button size="small" color="primary" variant="outlined">
                                    <a href={`tel:+976${item.phone1}`} target="_blank" rel="noreferrer" className={{
                                        display: "flex",
                                        textDecoration: "none",
                                        color: "#3f51b5",
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        minWidth: "110px",
                                    }}><Phone sx={{ marginRight: "10px" }} /> {item.phone2}</a>
                                </Button>
                            }
                            {item.fbLink &&
                                <Button size="small" color="primary" variant="outlined">
                                    <a href={item.fbLink} target="_blank" rel="noreferrer" className={{
                                        display: "flex",
                                        textDecoration: "none",
                                        color: "#3f51b5",
                                        fontWeight: 600,
                                        fontSize: "14px",
                                    }}><Facebook sx={{ marginRight: "10px" }} /> {item.fbName}</a>
                                </Button>
                            }
                        </CardActionBox>
                    </CardContent>
                </div>
            </Card>
        </Grid>
    )
}