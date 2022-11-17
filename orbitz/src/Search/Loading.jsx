import React from 'react';
import { makeStyles } from '@material-ui/core';

const LoadingComp = () => {
    const useStyles = makeStyles({
        loadingLogo: {
            width: "90px",
            height: "40px"
        },
        loadingDiv: {
            margin: "230px auto",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
    })
    const classes = useStyles();
    return (
        <div className={classes.loadingDiv}>
            <img className={classes.loadingLogo} src="https://media.tenor.com/whis5JX19ycAAAAC/loading-load.gif" alt="Orbitz logo" />
        </div>
    );
    
}
 
export default LoadingComp;