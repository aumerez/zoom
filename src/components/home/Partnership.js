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
    maxWidth: "250px",
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
        <Typography  variant="body1" color="white" align="center">
          {props.title}
        </Typography>
        <br />
        <Typography  variant="body2" color="white" align="center">
          {props.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

function Partnership() {
  return (
    <Box m={10}>
        <Typography variant="h4" color="white" display="block" align="center">
        Our Partnerships
        <br />
        <br />
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 10, md: 10 }}
        justifyContent="center"
        alignItems="center"
      >
        <Item img="Group 41_126.png" title="Shrimp Society" body="Founders Community"/>
        <Item img="Group 38.png" title="Acumen" body="Sports Media" />
        <Item img="grindlogo2_126.png" title="Grind" body="Sports Technology" />
        
        




      </Stack>
    </Box>
  );
}

export default Partnership;
