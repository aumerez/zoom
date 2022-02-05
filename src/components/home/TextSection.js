import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function HomeSection(props) {
  const bodyText = props.body.split("\n").map((str) => (
    <div>
      {str}
      <br />
    </div>
  ));
  return (
    <Box
      mb={10}
      alignText="center"
      alignItems="center"
      justifyContent="center"
      key={props.id.toString}
    >
      <Typography variant="h4" color="white" display="block" align="center">
        {props.title}
        <br />
        <br />
      </Typography>
      <Typography variant="body2" color="white" display="block" align="center">
        {bodyText}
      </Typography>
    </Box>
  );
}

export default HomeSection;
