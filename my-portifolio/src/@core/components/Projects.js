import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';


const Projects = () => {
    return (
        <div>
             <Typography variant="h4" component="h2" sx={{textAlign: 'center',paddingBottom: 5 }} >
           PROJECTS
          </Typography>
            <Grid container spacing={2} sx={{paddingLeft: 50 }}>
                <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
                     <Card sx={{ maxWidth: 400, height: 400 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/static/images/insurance.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Insurance
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                               This is an Insurance Website
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                             <Button
                                size="small"
                                color="primary"
                                component="a"
                                href="https://maureenmwangi.github.io/insuranceweb"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                     <Card sx={{ maxWidth: 400, height: 400 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/static/images/gurus.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Gurus
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                This is an E-commerce website that provides an easy way to sell products to a large customer base.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                             <Button
                                size="small"
                                color="primary"
                                component="a"
                                href="https://maureen-james.github.io/gurus"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{paddingLeft: 50, paddingTop:10 }}>
                <Grid item xs={12} sm={6}>
                     <Card sx={{ maxWidth: 400, height: 400 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/static/images/smart-farm.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Smart Farm
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                This is a modern solutions for modern Farmers
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                             <Button
                                size="small"
                                color="primary"
                                component="a"
                                href="jaredkevin.github.io/THE-SMART-FARM"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
                     <Card sx={{ maxWidth: 400, height: 400 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/static/images/quotes.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Quotes
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This is an application where users can create quotes </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                             <Button
                                size="small"
                                color="primary"
                                component="a"
                                href="https://maureen-james.github.io/Quotes/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Projects;
