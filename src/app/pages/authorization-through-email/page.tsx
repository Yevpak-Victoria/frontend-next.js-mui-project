import PageStructure from "@/app/components/PageStructure";
import RegistrationText from "@/app/components/components/RegistrationText";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Box, Typography} from "@mui/material";
import Link from "next/link";
import React from "react";

export default function AuthorizationTroughEmail (){
    return (
        <PageStructure>
            <Box sx={{mt: 3}}>

                <Link href="/"   style={{ textDecoration: "none", display: "flex", alignItems: "center", }}>
                    <ArrowBackIosNewIcon sx={{ color: "primary.light", fontSize: "0.6rem" }} />
                    <Typography
                        variant="h4"
                        sx={{
                            cursor: "pointer",
                            color: "primary.light",

                        }}
                    >Назад
                    </Typography>
                </Link>
                <RegistrationText />
            </Box>
        </PageStructure>
    )
}