'use client'
import PageStructure from "@/app/components/PageStructure";
import RegistrationText from "@/app/components/components/RegistrationText";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Box, Button, Typography} from "@mui/material";
import Link from "next/link";
import React, {useState} from "react";
import CustomInput from "@/app/pages/authorization-through-email/components/CustomInput";
import Asterisk from "@/app/pages/authorization-through-email/components/Asterisk";

export default function AuthorizationTroughEmail (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <PageStructure>
            <Box sx={{mt: 3}}>

                <Link href="/"   style={{ textDecoration: "none", display: "flex", alignItems: "center", paddingBottom: '10px', width: '50vh'}}>
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
                <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", paddingBottom: '10px' }}>

                    <Box sx={{ width: '40vh', display: 'flex', flexDirection: 'column', alignItems: "center"}}>
                        <Typography variant='h4' sx={{ textAlign: "center", pt:2, pb: 1 }}>
                            Завершіть створення свого облікового запису для повного використання
                        </Typography>
                        <Box sx={{ alignSelf: 'stretch' }}>
                            <CustomInput
                                label="Ім'я"
                                type='email'
                                value={email}
                                placeholder='Shambhav@gmail.comi'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <CustomInput
                                label="Пароль"
                                type='password'
                                value={password}
                                placeholder='• • • •'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Box>

                        <Button variant='contained' color='secondary' sx={{textTransform: 'none', fontWeight: 400, borderRadius: '30px', mt: 1, width: '20vh', boxShadow: 0}}>Створити</Button>
                        <Box sx={{ display: 'flex', mt: 2, alignSelf: 'flex-start' }}>
                            <Asterisk />
                            <Typography variant="h4">
                                Обов'язкові поля
                            </Typography>
                        </Box>

                    </Box>


                </Box>

            </Box>
        </PageStructure>
    )
}