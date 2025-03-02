export const customizations = () => ({
  palette: {
    primary: {
      main: '#ffffff',
      light: '#fff',
      dark: '#b2b2b2',
    },
    secondary: {
      main: '#13385d',
      light: '#49739e',
      dark: '#1c5186',
    },
  },
  // typography: {
  //   fontFamily: 'Poppins, Dela Gothic One, cursive, sans-serif',
  // },
  components: {
    MuiTextField: {
      defaultProps: {
        color: 'secondary',
        inputProps: {
          style: {
            color: '#fff', // This sets the text field font color
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: '#181818',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#181818',
        },
      },
    },
  },
});
