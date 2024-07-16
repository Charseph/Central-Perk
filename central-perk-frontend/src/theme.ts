import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B4513',
    },
    secondary: {
      main: '#FFD700',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system', 
      'BlinkMacSystemFont', 
      '"Segoe UI"', 
      'Roboto', 
      'Oxygen', 
      'Ubuntu', 
      'Cantarell', 
      '"Open Sans"', 
      '"Helvetica Neue"', 
      'sans-serif'
    ].join(','),
  },
});

export default theme;
