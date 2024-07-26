import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List'



import Icon from '@mui/material/Icon';



const Experience = () => {
    return (
        <>
            <Grid sx={{ mt: 3 }}>
                    <h3>
                        Junior Software Developer
                    </h3>
                <Typography sx={{ fontSize: '1em' }}>
                    ARC Ride Global Kenya
                    2023 - Present
        </Typography>

                    <List
                    >
                        <ListItem
                            sx={{ '& svg': { mr: 2 } }}
                        >
                            <Icon icon="mdi-light:pin" />

                            Assisted in designing, developing, testing, debugging and maintaining digital services that met companies needs.
                        </ListItem>
                        <ListItem
                            sx={{ '& svg': { mr: 2 } }}
                        >
                            <Icon icon="mdi-light:pin" />
                            Regularly tested and monitored performance of internal systems, reporting issues or malfunctions to my seniors for resolving.

                        </ListItem>

                        <ListItem>
                            <Icon icon="mdi-light:pin" />
                            Gained extensive skills and abilities in Angular, JavaScript, React, NextJs RESTful APIs, and SQL , through regular practice in projects.

                        </ListItem>
                        
                        <ListItem
                            sx={{ '& svg': { mr: 2 } }}
                        >
                            <Icon icon="mdi-light:pin" />

                            Proactively contributed and communicated project enhancement ideas within team meetings.
                        </ListItem>
                        <ListItem
                            sx={{ '& svg': { mr: 2 } }}
                        >
                            <Icon icon="mdi-light:pin" />

                            Continuously developed coding skills and codebase knowledge by overseeing professionals and regular practice.
                        </ListItem>
                        <ListItem
                            sx={{ '& svg': { mr: 2 } }}
                        >
                            <Icon icon="mdi-light:pin" />

                            Assisted other software engineers as required, including troubleshooting bugs, debugging software, creating code and developing applications.
                        </ListItem>
                        <ListItem
                            sx={{ '& svg': { mr: 2 } }}
                        >
                            <Icon icon="mdi-light:pin" />

                            Worked closely with other team members to identify and remove software bugs.
                        </ListItem>
                        <ListItem
                            sx={{ '& svg': { mr: 2 } }}
                        >
                            <Icon icon="mdi-light:pin" />
                            Gained extensive skills and abilities in using Odoo. We use Odoo for inventory and stock management, Leave management, Manufacturing of bikes management, Sales and Invoicing.
                        </ListItem>
                    </List>



            </Grid>
        </>
    )
}

export default Experience