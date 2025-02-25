'use client'

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    cssVariables: true,
    typography: {
        fontFamily: 'var(--font-montserrat)',
        h1: {
            fontSize: '2rem',
            fontWeight: 400,
        },
        h2: {
            fontSize: '1.75rem',
        },
        h3: {
            fontSize: '1.4rem',
        },
        h4: {
            fontSize: '0.75rem',
        },
        h5: {
            fontSize: '0.6rem',
        }
    },
    palette: {
        primary: {
            main: '#161616',
            light: '#535353'
        },
        secondary: {
            main: '#41CFFF',
        },
    },

});


