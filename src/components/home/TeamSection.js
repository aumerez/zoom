import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//import * as styles from '../../App.ccs';

import { createTheme, ThemeProvider } from "@mui/material/styles";

const styles = {
  media: {
    height: "auto",
    maxWidth: "360px",
    width: "auto",
    padding: '10px'
  },
 
};

const theme = createTheme();

/*theme.typography.h6 = {
  fontSize: "0.5rem",
  "@media (min-width:600px)": {
    fontSize: "0.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "0.5rem",
  },
};

const styles = 
{

media: {
  height: 0,
  paddingTop: '56.25%', // 16:9,
  marginTop:'30'
}
  };


 <CardMedia
      className={classes.media}
      ***image={require('assets/img/bg2.jpg')}***
      title="Contemplative Reptile"
      **style={styles.media}**
    />
*/

const Item = (props) => {
  return (
    <Box
      direction="column"
      //margin={{ top: 'large' }}
      //justify="end"
      border={1} borderColor="red"
      align="center"
    ></Box>
  );
  
  // const imgUrl =
  /*return (
    <Card elevation={0} sx={{ background: "none" }}>
      <CardMedia
        component="img"
        height="90"
        width="100%"
        image={`../../assets/${props.img}`}
        style={styles.media}
        align="center"
      />
      <CardContent>
        <Typography  variant="body2" color="white" align="center">
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );*/
};

function TheTeam() {
  return (
    <Box m={10}>
        <Typography variant="h4" color="white" display="block" align="center">
        Team
        <br />
        <br />
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 10, md: 10 }}
        justifyContent="center"
        alignItems="center"
      >
        <Item img="Daniel Pardo.png" />
        <Item img="Khambrel Roach.png" />
        <Item img="Jacob Byck.png" />
        {/*
        <Item img="Daniel Pardo.png" title="Daniel Pardo 2" />
        <Item img="Khambrel Roach.png" title="Khambrel Roach 2" />
        <Item img="Jacob Byck.png" title="Jacob Byck 2" />
      
        */}
      </Stack>
    </Box>
  );
}

export default TheTeam;