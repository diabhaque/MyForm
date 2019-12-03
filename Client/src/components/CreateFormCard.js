import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

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
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "flex-start",
    }
  }));


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

export default function CreateFormCard({getForms}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  let name="";
  let author="";

  const handleOpen=()=>{
      setOpen(true);
  }

  const handleClose=()=>{
      setOpen(false);
  }

  const onNameChange=(event)=>{
    name=event.target.value;
  }
  const onAuthorChange=(event)=>{
    author=event.target.value;
  }
  const submit=()=>{
    fetch('http://localhost:8081/addform', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            name: name,
            author: author,
        })  
    })
    .then(response=>console.log(response))

    setOpen(false);
  }


  return (
      <div>
        <Card className={classes.card}>
            <CardActionArea className={classes.mainDiv} onClick={handleOpen}>
                <div className={classes.imgDiv}>
                <AddRoundedIcon
                    color='secondary'
                    style={{
                        fontSize: 200
                    }}
                />
                </div>
                <Typography gutterBottom variant="h5" component="h2">
                    Add Form
                </Typography>
            </CardActionArea>
        </Card>
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
        >
            <div style={modalStyle} className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    name="title"
                    id="outlined-full-width"
                    label="Form Name"
                    style={{ margin: 8 }}
                    placeholder=""
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onNameChange}
                    variant="outlined"
                />
                <TextField
                    name="author"
                    id="outlined-full-width"
                    label="Form Author"
                    style={{ margin: 8 }}
                    placeholder=""
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onAuthorChange}
                    variant="outlined"
                />
                <Button size="small" variant="outlined" onClick={submit} style={{width: '100px', marginLeft:'8px'}}>Create</Button>
            </form>
            </div>
        </Modal>
      </div>
    
  );
}
