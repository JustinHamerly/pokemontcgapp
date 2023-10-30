import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#E4B4DB',
      main: '#963484',
      dark: '#2E1028',
      contrastText: '#EBF9FF',
    },
    secondary: {
      light: '#E9EBEC',
      main: '#929BA0',
      dark: '#5F696D',
      contrastText: '#090B0B',
    },
  },
});

export default theme