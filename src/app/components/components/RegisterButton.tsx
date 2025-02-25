'use client'

import {Box, Button, Typography} from "@mui/material";
import {ReactNode} from "react";

interface RegisterButtonProps {
    children: ReactNode;
    registerImgSrc: string;
    onClick?: () => void;
}

export function RegisterButton( {children, registerImgSrc, onClick}: RegisterButtonProps ) {
    return <Button variant="outlined" onClick={onClick}
    sx={{
        fontSize: '0.6rem',
        borderRadius: 8,
        m: 0.8,
        height: "5.5vh",
        width: "34vh",
        textTransform: 'inherit',
    }}>
        <Box component="img"
        src={registerImgSrc}
             sx={{
                 width: '25px'
             }}
        />
        <Box sx={{flexGrow: 1}}>
            <Typography variant="h4" component="h4"
                        sx={{
                            whiteSpace: "pre-line",
                            letterSpacing: "0.01rem",
                        }} >{"Зареєструватись\n"}</Typography>
            <Typography variant="h4" component="h4">з допомогою  {children}</Typography>
        </Box>



    </Button>
}