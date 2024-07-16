import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CustomAppBar = styled(AppBar)({
  backgroundColor: 'white',
  borderBottom: '2px solid brown',
  marginBottom: '10px',
});

const CustomToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
});

const LogoImage = styled('img')({
  height: '60px',
});

const Header: React.FC = () => (
  <CustomAppBar position="static">
    <CustomToolbar>
      <Typography variant="h6" color="textPrimary">Central</Typography>
      <LogoImage src={`${process.env.PUBLIC_URL}/Logo.png`} alt="Central Perk Logo" />
      <Typography variant="h6" color="textPrimary">Perk</Typography>
    </CustomToolbar>
  </CustomAppBar>
);

export default Header;
