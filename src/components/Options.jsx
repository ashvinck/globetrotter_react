import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, styled } from '@mui/material';
import { useCheckDestinationIsCorrectMutation } from '../features/GameData/gameApiSlice';
import { toast, ToastContainer } from 'react-toastify';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 'bold',
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.primary.light,
  borderColor: theme.palette.secondary.dark,
  color: theme.palette.secondary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.light,
  },
}));

const Options = ({ data }) => {
  const id = data?.id;

  const [sendSelectedOption] = useCheckDestinationIsCorrectMutation();

  const handleOptionClick = async (selctedCity, id) => {
    const gameData = {
      id: id,
      selectedCity: selctedCity,
    };
    sendSelectedOption(gameData)
      .unwrap()
      .then((response) => toast.success(response.message))
      .catch((err) => toast.error('Error saving selected city', err.message));
  };
  return (
    <>
      <ToastContainer autoClose={800} theme='dark' />
      <StyledBox>
        <Stack spacing={2} direction='column' width='300px'>
          {data?.options?.map((item) => (
            <StyledButton
              variant='outlined'
              key={item}
              onClick={() => handleOptionClick(item, id)}
            >
              {item}
            </StyledButton>
          ))}
        </Stack>
      </StyledBox>
    </>
  );
};

export default Options;
