import React from 'react';
import { logo } from '../constants/constants';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
  <AppBar color="transparent" position='static'>
    <Toolbar>
    <img src={logo} alt="logo" style={{ width: 30, marginRight: 10 }} />
    <Typography variant='h6'>EverNote</Typography>
    </Toolbar>
  </AppBar>
  )
}

export default Header
