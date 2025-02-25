import {Box } from "@mui/material";
import React, {ReactNode} from "react";

interface CustomBoxProps {
    children : ReactNode;
}

export default function CustomBox({ children } : CustomBoxProps) {
    return <Box sx={{
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        paddingBottom: '10px'}}>

        <Box sx={{
            width: '40vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center"}}>
            {children}
        </Box>


    </Box>
}