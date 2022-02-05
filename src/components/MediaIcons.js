import * as React from "react";

import Stack from "@mui/material/Stack";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from '@mui/icons-material/Instagram';
import Avatar from '@mui/material/Avatar';


const Icon = (props) => {
  return (
    <Avatar sx={{ bgcolor: '#897ea2' }}>
    {props.iconName === 'twitter' ? (
      <a href="https://twitter.com/dpc_nft?s=11" target="_blank"  rel="noreferrer" style={{ textDecoration: 'none' }}><TwitterIcon sx={{ color: '#150049' }} /></a>
    ) : (
      <a href="https://instagram.com/dpcnft?utm_medium=copy_link" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}><InstagramIcon sx={{ color: '#150049' }}/></a>
    )} 
    </Avatar>
  );
};

function MediaIcons() {
  return (
    <Stack direction="row" spacing={2}>
      <Icon iconName='twitter' />
      <Icon iconName='instagram' />
    </Stack>
  );
}

export default MediaIcons;
