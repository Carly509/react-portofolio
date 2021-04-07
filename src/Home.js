import React from 'react';
import {makeStyles, useMediaQuery, Grid, Typography, Divider } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typist from 'react-typist';

export default function Home() {

    const classes = useStyles();
    const smallScreen = useMediaQuery('(max-width: 599px)');
    const [count, setCount] = React.useState(1);

    React.useEffect(() => {
        setCount(1);
    }, [count]);

    return (
        <Grid container direction='column' className={ classes.homeContainer }>
        <Grid container justify="flex-start" alignItems="center" className={ classes.greetingsContainer }>
        <Grid container>
        <Typography className={ classes.text1 }>
          Howdy,
        </Typography>
        <Typography className={ classes.text2 }>
          I'm
        </Typography>
        </Grid>
        <Typist  key={ count } avgTypingDelay={ 100 } onTypingDone={ () => setCount(0) }>
        <span className={ classes.textStatus }>
            Carly
            </span>
            <Typist.Backspace count={ 14 } delay={ 800 } />
            <span className={ classes.textStatus }>
            a MERN Developer
            </span>
            <Typist.Backspace count={ 16 } delay={ 800 } />
            <span className={ classes.textStatus }>
            a RoR Developer
            </span>
            <Typist.Backspace count={ 23 } delay={ 800 }/>
        </Typist>
    </Grid>
    <Divider className={ classes.divider } />
    <Grid
        container
         direction="row"
        justify="flex-end"
        alignItems="flex-end"
        className={ classes.iconContainer }
    >
        <FacebookIcon  className={ classes.iconIcon }/>
        <LinkedInIcon  className={ classes.iconIcon }/>
        <TwitterIcon  className={ classes.iconIcon }/>
        <GitHubIcon  className={ classes.iconIcon }/>
    </Grid>
        </Grid>
    )
}

const useStyles = makeStyles(() => ({
    homeContainer: {
        background: '#1b1b1b', 
        minHeight: "100vh",
    },
    iconIcon: {
        color: 'white',
        fontSize: 25,
        margin: 20,
        '&:hover': {
            color: '#70A085',
            fontSize: 35,
        },

    },
    greetingsContainer: {
        marginTop: '10%',
        marginLeft: '10%',
        width: '80%',
    },
    iconContainer: {
        marginTop: '15%',
    },
    text1: {
        fontSize: 95,
        fontWeight: 'bold',
        color: '#70A085',
    },
    text2: {
        fontSize: 95,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: '2%',
    },
    textStatus: {
        fontSize: 95,
        fontWeight: 'bold',
        color: '#70A085',
    },
    divider: {
        marginTop: 120,
        width: 100,
        border: '1px solid white',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        filter: 'blur(4px)',
        transform: 'rotate(-0.17deg)'
    },
}))

