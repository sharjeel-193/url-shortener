import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#68A07E',
            light: '#BEE6CE'
        },
        text: {
            primary: '#434343'
        }
    },
    
    typography: {
        h1: {
            fontSize: '2rem', // default
            '@media (min-width:600px)': {
                fontSize: '2.5rem',
            },
            '@media (min-width:960px)': {
                fontSize: '3rem',
            },
            '@media (min-width:1280px)': {
                fontSize: '3.5rem',
            },
        },
        h2: {
            fontSize: '2rem', // default
            '@media (min-width:600px)': {
                fontSize: '2.5rem',
            },
            '@media (min-width:960px)': {
                fontSize: '2.75rem',
            },
            '@media (min-width:1280px)': {
                fontSize: '3rem',
            },
        },
    }
    
});

export default theme;