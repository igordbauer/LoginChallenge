import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@material-ui/system';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Login from 'views/Login';
import bgImage from 'assets/background.png';


const Theme = responsiveFontSizes(
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },

    palette: {
      primary: {
        main: '#3E83FF',
      },
      background: {
        paper: 'rgb(255,255,255,0.7)',
        default: 'white',
      },
      secondary: {
        main: '#28DC8E',
      },
    },
    shape: {
      borderRadius: 8,
    },
  })
);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        minWidth: '100%',
      }}>
        <Login />
      </Box>
    </ThemeProvider>
    <CssBaseline />
  </React.StrictMode>,
  document.getElementById('root')
);
