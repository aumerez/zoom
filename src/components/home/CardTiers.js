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
    maxWidth: "120px",
    width: "auto",
    padding: '15px'
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

function CardTiers() {
  return (
    <Box m={10}>
        <Typography variant="h4" color="white" display="block" align="center">
        Card Tiers
        <br />
        <br />
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 10, md: 10 }}
        justifyContent="center"
        alignItems="center"
      >
        <Item img="Group 13_90.png" title="DPC Platinum" />
        <Item img="Group 12_90.png" title="DPC Gold" />
        <Item img="Group 22_90.png" title="DPC Silver" />
        <Item img="Group 26_90.png" title="DPC Basic Elite" />
        {/*
        <Item img="Group 12.png" title="DPC Platinum" />
        <Item img="Group 12.png" title="DPC Gold" />
        <Item img="Group 12.png" title="DPC Silver" />
        <Item img="Group 12.png" title="DPC Basic Elite" />
      
        */}
      </Stack>
    </Box>
  );
}

export default CardTiers;
