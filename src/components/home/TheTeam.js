import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const styles = {
  media: {
    height: "auto",
    maxWidth: "360px",
    width: "auto",
    padding: '10px'
  },
};


const Item = (props) => {

  return (
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
  );
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