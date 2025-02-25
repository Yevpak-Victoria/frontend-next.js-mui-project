import Asterisk from "@/app/pages/authorization-through-email/components/Asterisk";
import {Box, Typography} from "@mui/material";
import React from "react";

export default function Footnote(){
    return <Box sx={{ display: 'flex', mt: 2, alignSelf: 'flex-start' }}>
        <Asterisk />
        <Typography variant="h4">
            Обов&apos;язкові поля
        </Typography>
    </Box>
}