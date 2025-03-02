import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Confetti from 'react-confetti';
import BgClue from '../assets/clue_background.webp';

// Styled Dialog
const StyledDialog = styled(Dialog)(({ theme }) => ({
  padding: theme.spacing(2),
  backdropFilter: 'blur(5.5px)',
  background: 'rgba(47, 47, 47, 0.1)',
  '& .MuiPaper-root': {
    borderRadius: '10px',
    padding: theme.spacing(6),
    background: 'rgba(130, 130, 130, 0.12)',
    backgroundRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5.5px)',
    WebkitBackdropFilter: 'blur(5.5px)',
    border: '1px solid rgba(47, 47, 47, 0.45)',
  },
}));

// Play Now Button
const StyledButton = styled(Button)(() => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 'bold',
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 'bold',
  fontSize: '20px',
  // textAlign: 'center',
  color: theme.palette.secondary.light,
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledClueBox = styled(Box)(({ theme }) => ({
  background: `url(${BgClue})`,
  height: 'fitContent',
  width: 'fitContent',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(3),
  margin: theme.spacing(2),
}));

const StyledClues = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 'bold',
  fontSize: '20px',
  textAlign: 'center',
  color: theme.palette.secondary.dark,
}));

const CorrectAnswerModal = ({ selectedCorrectAnswer, handleClose, open }) => {
  return (
    <StyledDialog open={open} onClose={handleClose}>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={750}
        recycle={false}
        run={true}
      />
      {console.log('selectedCorrectAnswer', selectedCorrectAnswer)};
      <StyledTitle>Fun Fact</StyledTitle>
      <StyledCardContent>
        <StyledClueBox>
          {selectedCorrectAnswer?.fun_fact.map((item) => (
            <StyledClues key={item}>{item}</StyledClues>
          ))}
        </StyledClueBox>
      </StyledCardContent>
      <StyledTitle>Trivia</StyledTitle>
      <StyledCardContent>
        <StyledClueBox>
          {selectedCorrectAnswer?.trivia.map((item) => (
            <StyledClues key={item}>{item}</StyledClues>
          ))}
        </StyledClueBox>
      </StyledCardContent>
      <StyledButton
        variant='contained'
        color='secondary'
        size='large'
        onClick={handleClose}
      >
        Play Again
      </StyledButton>
    </StyledDialog>
  );
};

export default CorrectAnswerModal;
