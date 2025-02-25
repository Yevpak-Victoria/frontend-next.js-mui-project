import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {Typography} from "@mui/material";
import Link from "next/link";
import React from "react";

export default function BackButton (){
    return <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", paddingBottom: '10px', width: '50vh'}}>
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
}