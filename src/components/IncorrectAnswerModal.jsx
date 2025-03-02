import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';

// Styled Dialog
const StyledDialog = styled(Dialog)(({ theme }) => ({
  padding: theme.spacing(2),
  backdropFilter: 'blur(5.5px)',
  background: 'rgba(47, 47, 47, 0.1)',
  '& .MuiPaper-root': {
    borderRadius: '10px',
    padding: theme.spacing(6),
    background: 'rgba(214, 214, 214, 0.12)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5.5px)',
    WebkitBackdropFilter: 'blur(5.5px)',
    border: '1px solid rgba(47, 47, 47, 0.45)',
  },
}));

// Styled Components
const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 'bold',
  fontSize: '22px',
  color: theme.palette.error.main,
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

const StyledMessage = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '18px',
  color: theme.palette.primary.main,
  textAlign: 'center',
  marginBottom: theme.spacing(3),
}));

const StyledButton = styled(Button)(() => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 'bold',
}));

const IncorrectAnswerModal = ({ open, handleClose }) => {
  return (
    <StyledDialog open={open} onClose={handleClose}>
      <Box textAlign='center'>
        <StyledTitle>Oops! Wrong Answer 😢</StyledTitle>
        <StyledMessage>
          Don't worry, try again and get it right next time!
        </StyledMessage>
        <StyledButton
          variant='contained'
          color='secondary'
          size='large'
          onClick={handleClose}
        >
          Play Again
        </StyledButton>{' '}
      </Box>
    </StyledDialog>
  );
};

export default IncorrectAnswerModal;
