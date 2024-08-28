import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import PushPinIcon from '@mui/icons-material/PushPin';

const Experience = () => {
    return (
        <>
        
            <Grid sx={{mx: 6 }}>
                <Typography variant="h4" component="h2" sx={{ textAlign: 'center', paddingBottom: 5 }}>
                    EXPERIENCE
                </Typography>
                <Grid item xs={12} sm={6} sx={{textAlign: 'center', display: 'flex'}}>
                    <Grid>
                <h5>Junior Software Developer</h5>
                <Typography sx={{ fontSize: '1em' }}>
                    ARC Ride Global Kenya
                    </Typography>
                    <Typography sx={{ fontSize: '1em' }}>
                    2023 - Present
                </Typography>
                </Grid>
                <Grid>
                <List>
                    <ListItem sx={{ '& svg': { mr: 2 } }}>
                        <PushPinIcon />
                        Assisted in designing, developing, testing, debugging and maintaining digital services that met companies needs.
                    </ListItem>
                    <ListItem sx={{ '& svg': { mr: 2 } }}>
                        <PushPinIcon />
                        Regularly tested and monitored performance of internal systems, reporting issues or malfunctions to my seniors for resolving.
                    </ListItem>
                    <ListItem sx={{ '& svg': { mr: 2 } }}>
                        <PushPinIcon />
                        Gained extensive skills and abilities in Angular, JavaScript, React, NextJs RESTful APIs, and SQL , through regular practice in projects.
                    </ListItem>
                    <ListItem sx={{ '& svg': { mr: 2 } }}>
                        <PushPinIcon />
                        Proactively contributed and communicated project enhancement ideas within team meetings.
                    </ListItem>
                    <ListItem sx={{ '& svg': { mr: 2 } }}>
                        <PushPinIcon />
                        Continuously developed coding skills and codebase knowledge by overseeing professionals and regular practice.
                    </ListItem>
                    <ListItem sx={{ '& svg': { mr: 2 } }}>
                        <PushPinIcon />
                        Assisted other software engineers as required, including troubleshooting bugs, debugging software, creating code and developing applications.
                    </ListItem>
                    <ListItem sx={{ '& svg': { mr: 2 } }}>
                        <PushPinIcon />
                        Worked closely with other team members to identify and remove software bugs.
                    </ListItem>
                    <ListItem sx={{ '& svg': { mr: 2 } }}>
                        <PushPinIcon />
                        Gained extensive skills and abilities in using Odoo. We use Odoo for inventory and stock management, Leave management, Manufacturing of bikes management, Sales and Invoicing.
                    </ListItem>
                </List>
                </Grid>
            </Grid>
            </Grid>
        </>
    );
}

export default Experience;
