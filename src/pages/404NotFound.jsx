import React from 'react';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BigCities from '../assets/BgCities.webp';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const PageContainer = styled(Box)(() => ({
  height: '100vh',
  width: '100%',
  background: `url(${BigCities})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
}));

// Heading Text
const StyledHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: 'Dela Gothic One, cursive',
  position: 'absolute',
  top: '15vh',
  left: '50%',
  transform: 'translateX(-50%)',
}));

const NotFound = () => {
  return (
    <PageContainer>
      <Header />
      <StyledHeading variant='h4'>Resource Not Found</StyledHeading>
      <Footer />
    </PageContainer>
  );
};

export default NotFound;
