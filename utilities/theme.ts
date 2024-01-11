import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes';
import createTheme from '@mui/material/styles/createTheme';

const base = createTheme();

const theme = responsiveFontSizes(base);

export default theme;
