import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MediaIcons from "./MediaIcons";
const pages = ['Cards', 'Partnerships'];



function Header() {

  return (

    <AppBar position="static" sx={{
      background : 'none',
      paddingTop: '10px'
      }} elevation={0} variant="dense">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="../../assets/DPC_Logo_White.png" alt="logo" height="60px"/>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                style={{ fontSize: '16px', textTransform: 'capitalize'}}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <MediaIcons />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Box sx={{ flexGrow: 0 }}>
          
          <Button variant="contained" color="secondary" style={{ fontSize: '16px', textTransform: 'capitalize'}}>Connect Wallet</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );

}

export default Header;
