import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";

function LogoTitle() {
  return (
    <Box m={10}>
    <Stack 
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 0, md: 0 }}
      justifyContent="center"
      alignItems="center"
    >
      <Box>
       <img src="../../assets/LogoWithShape.png" alt="logo" style={{ height: "70vh" }}/>
      </Box>
      <Box>
        <Typography variant="h3" color="white">
          <Box fontWeight="fontWeightLight">The Ultimate</Box>
          <Box fontWeight="fontWeightBold">Digital Player Card </Box>
          <Box fontWeight="fontWeightLight">platform for everyone</Box>
        </Typography>
      </Box>
    </Stack>
  </Box>
  );
}

    /*<Box m={10} >
      <Grid container  spacing={-40} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={8}>
          <img src="../../assets/LogoWithShape.png" alt="logo" style={{ height: "80vh" }}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h2" color="white">
            The Ultimate Digital Player Card platform for everyone
          </Typography>
        </Grid>
      </Grid>
</Box>*/

export default LogoTitle;

