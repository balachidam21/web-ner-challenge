import React from "react";
import {Grid} from "@material-ui/core";
import '../App.css';
import Entity from "./Entity";
import Header from "./Header";

const Welcome = () => {


    return (
        <Grid align ='center' className="App-header">
            <Header />
            <Entity />
        </Grid>
    );
}

export default Welcome;