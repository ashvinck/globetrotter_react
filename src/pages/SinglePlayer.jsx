import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from 'react-toastify';
import Confetti from 'react-confetti';
import { useSelector, useDispatch } from 'react-redux';
import GameContainer from '../components/gameContainer';
import BgClue from '../assets/clue_background.webp';
import { useGetRandomDestinationsQuery } from '../features/GameData/gameApiSlice';
import { useCheckDestinationIsCorrectMutation } from '../features/GameData/gameApiSlice';
import WinnerModal from '../components/CorrectAnswerModal';
import {
  incrementScore,
  incrementTotalQuestions,
  selectCorrectAnswers,
  selectTotalQuestions,
} from '../features/GameData/gameDataSlice';
import IncorrectAnswerModal from '../components/IncorrectAnswerModal';

const StyledBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  height: '100vh',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  backgroundColor: theme.palette.primary.light,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  flex: 1,
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 'bold',
  fontSize: '20px',
  textAlign: 'center',
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

const StyledLinkBox = React.memo(
  styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
  }))
);

const StyledOptionsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));

const StyledOptionsButton = styled(Button)(({ theme }) => ({
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

const StyledScoreButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 'bold',
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.primary.light, // Disabled background
  color: theme.palette.secondary.dark, // Disabled text color
  borderColor: theme.palette.secondary.main,
  border: '1px solid',
  cursor: 'not-allowed',
  '&:hover': {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.action.disabled,
  },
}));

const StyledScoreBox = React.memo(
  styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  }))
);

const SinglePlayer = () => {
  const { data, isLoading, isSuccess, isError, refetch } =
    useGetRandomDestinationsQuery();
  const [sendSelectedOption] = useCheckDestinationIsCorrectMutation();

  const dispatch = useDispatch();
  const correctAnswers = useSelector(selectCorrectAnswers);
  const totalQuestions = useSelector(selectTotalQuestions);

  const [selectedCorrectAnswer, setSelectedCorrectAnswer] = useState(null);
  const [open, setOpen] = useState(false); /// For correct answers
  const [incorrectOpen, setIncorrectOpen] = useState(false); /// For incorrect answers
  const [isChecking, setIsChecking] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setOpen(false);
      setSelectedCorrectAnswer(null);
    }
  }, [isLoading]);

  const id = data?.id || '';
  const clues = data?.clues || [];
  const options = data?.options || [];

  const handleOptionClick = async (selectedCity) => {
    if (isChecking) return; // Prevent multiple clicks
    setIsChecking(true);

    const gameData = {
      id: data?.id,
      selectedCity,
    };

    try {
      const response = await sendSelectedOption(gameData).unwrap();

      // Increment the total questions attempted
      dispatch(incrementTotalQuestions());

      if (response.fun_fact) {
        const data = {
          fun_fact: response?.fun_fact,
          trivia: response?.trivia,
        };
        setSelectedCorrectAnswer(data);
        setOpen(true);
        toast.success('Correct Answer');

        // Increment the score only for correct answers
        dispatch(incrementScore());
      } else {
        setIncorrectOpen(true);
        toast.error('😢 Wrong Answer!');
      }
    } catch (error) {
      toast.error('Error: ' + error.message);
    } finally {
      setIsChecking(false);
    }
  };

  const handleClose = async () => {
    setOpen(false);
    setSelectedCorrectAnswer(null);
    try {
      await refetch().unwrap(); // Ensures refetch resolves properly
    } catch (error) {
      toast.error('Failed to load a new question. Please try again.');
    }
  };

  const handleIncorrectClose = async () => {
    setIncorrectOpen(false);
    try {
      await refetch().unwrap(); // Ensures refetch resolves properly
    } catch (error) {
      toast.error('Failed to load a new question. Please try again.');
    }
  };

  console.log('data', data);

  return (
    <>
      {/* Loading Icon  */}
      {isLoading ? (
        <GameContainer>
          <StyledLinkBox>
            <Typography sx={{ p: 2 }}>Please wait....</Typography>
            <CircularProgress color='secondary' />
          </StyledLinkBox>
        </GameContainer>
      ) : isError ? (
        <GameContainer>
          <StyledLinkBox>
            <Typography sx={{ p: 2, color: 'red', fontWeight: 'bold' }}>
              ❌ Server Error. Please wait a minute and try again.
            </Typography>
            <Button
              variant='contained'
              color='secondary'
              onClick={refetch} // Try fetching the data again
            >
              Retry
            </Button>
          </StyledLinkBox>
        </GameContainer>
      ) : (
        <GameContainer>
          // Box with clues and options
          <StyledBox>
            <ToastContainer autoClose={800} theme='dark' />
            <StyledCard>
              <StyledScoreBox>
                <StyledScoreButton>
                  Score: {correctAnswers}/{totalQuestions}
                </StyledScoreButton>
              </StyledScoreBox>
              <StyledTitle>Guess the city based on the clue below</StyledTitle>
              <StyledCardContent>
                <StyledClueBox>
                  {clues.map((item) => (
                    <StyledClues key={item}>{item}</StyledClues>
                  ))}
                </StyledClueBox>
                <StyledOptionsBox>
                  <Stack spacing={2} direction='column' width='300px'>
                    {options?.map((item) => (
                      <StyledOptionsButton
                        variant='outlined'
                        key={item}
                        onClick={() => handleOptionClick(item, id)}
                        disabled={isChecking}
                      >
                        {item}
                      </StyledOptionsButton>
                    ))}
                  </Stack>
                </StyledOptionsBox>
                {/* <StyledButton>Next Question</StyledButton> */}
              </StyledCardContent>
            </StyledCard>
          </StyledBox>
        </GameContainer>
      )}
      {selectedCorrectAnswer && (
        <Confetti
          width={windowSize.innerWidth}
          height={windowSize.innerHeight}
          numberOfPieces={750}
          recycle={false}
          run={true}
        />
      )}
      <WinnerModal
        selectedCorrectAnswer={selectedCorrectAnswer}
        open={open}
        handleClose={handleClose}
      />
      <IncorrectAnswerModal
        open={incorrectOpen}
        handleClose={handleIncorrectClose}
      />
    </>
  );
};

export default SinglePlayer;
