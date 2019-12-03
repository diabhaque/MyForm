import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles(theme => ({
    card: {
        width: 200,
        marginTop: '30px',
        marginLeft: '30px',
    },
    mainDiv: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
  }));


export default function FormCard({name}) {
  const classes = useStyles();

  const handleClick=()=>{
    console.log("click");
  }

  return (
      <div>
        <Card className={classes.card}>
            <CardActionArea className={classes.mainDiv} onClick={handleClick}>
                <div className={classes.imgDiv}>
                <AccountBoxIcon
                    color='secondary'
                    style={{
                        fontSize: 200
                    }}
                />
                </div>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
            </CardActionArea>
        </Card>
      </div>
    
  );
}
