import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    title : {
        fontSize:75,
        color : "white",
        marginTop: 50,
        marginBottom:75,
    }
}));

const Header = () =>{
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h4" component="h1" align='center' className={classes.title}>
                NAMED ENTITY RECOGNITION
            </Typography>
        </div>
    );
}

export default Header;