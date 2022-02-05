import * as React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MediaIcons from "./MediaIcons";

const styles = {
  box: {
    left: 0,
    bottom: 0,
    right: 0,
  },
};

function Footer() {
  return (
    <Box
      pt={10}
      pb={2}
      sx={{
        background: "none",
      }}
      style={styles.box}
    >
      <Stack 
        direction={{ xs: 'column' }}
        spacing={{ xs: 2 }}
        justifyContent="center"
        alignItems="center"
      >
        <MediaIcons />
        <Container
        maxWidth="xl"
        display="flex"
        minHeight="100vh"
        flexDirection="column"
        align="center"
      >
        <Typography variant="caption" color="white" align="center">
          dpcnft@gmail.com
          <br />
          2021 Digital Cards. All rights reserved
        </Typography>
      </Container>
      </Stack>
      
    </Box>
  );
}

export default Footer;

