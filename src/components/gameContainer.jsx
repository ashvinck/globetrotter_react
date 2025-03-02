import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Header from './Header.jsx';
import BigCities from '../assets/home_back.webp';

const PageContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  background: theme.palette.primary.main,
  color: theme.palette.secondary.main,
}));

const GameWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  background: `url(${BigCities})`,
}));

const GameContainer = ({ children }) => {
  return (
    <PageContainer>
      <Header />
      <GameWrapper>{children}</GameWrapper>
    </PageContainer>
  );
};

export default GameContainer;
