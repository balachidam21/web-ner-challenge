import { React, useEffect, useState } from "react";
import { Grid, TextareaAutosize, Button, makeStyles } from "@material-ui/core";


const handleErrors = async (response) => {
    if (!response.ok) {
        const message = await response.json();
        document.getElementById('error').innerHTML = message.message;
        // console.log("message", message);

        throw Error(message);
    }
    return response.json();
}

const useStyles = makeStyles(() => ({
    root : {
        width:460,
        backgroundColor: '#282c34',   
    },
    clear : {
        color : "red",
        marginTop: 50,
    },
    text : {
        color : "green"
    }
}));



const Entity = () => {
    const [entityText, setEntityText] = useState("");
    const [result, setResult] = useState([]);
    const classes = useStyles();



    const entity = (e) => {
        e.preventDefault();

        var request_json = { 'text': entityText }
        fetch('get_entity', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(request_json)
        })
            .then(handleErrors)
            .then(data => {
                setResult(data);
            })
            .catch(function (error) {
                console.log(error)
            })
    };
    const clearContents = (e) => {
        e.preventDefault();
        setEntityText("");
        setResult([]);
    }
    useEffect(() => {
        console.log(result)
    }, [result])

    return (
        <Grid>
            <Grid container
                justifyContent="center"
                direction="column">
                <form onSubmit={entity}>
                    <TextareaAutosize
                        variant="outlined"
                        type="text"
                        name="entityText"
                        placeholder="Enter text here!"
                        minRows={10}
                        style={{ width: '75%', height: '50%', }}
                        value={entityText}
                        onChange={(e) => setEntityText(e.target.value)}
                    />
                    <br />
                    <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                        type="submit"
                    >
                        Get Entities!
                    </Button>

                </form>
                <br />
            </Grid>
            <Grid
                container
                justifyContent="center"
                direction="row">
                <table>
                    <tbody>
                        {result.map((row,key) => (
                            <tr key={key}>
                                <td>{row.text}</td>
                                <td className={classes.text}>{row.entity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
               
            </Grid>
            <Grid>
            <div>
                <Button
                    varaint="contained"
                    size ="small"
                    color="secondary"
                    onClick={clearContents}
                    className={classes.clear}
                >
                    Clear Contents
                </Button>
                </div>
            </Grid>
        </Grid>

    );
}


export default Entity;