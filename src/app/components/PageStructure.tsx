'use client';

import ImageBackground from "@/app/components/components/ImageBackground";
import React  from "react";
import {Box} from "@mui/material";
import {RightContainer} from "@/app/components/components/RightContainer";
import {ProductLogoOnTop} from "@/app/components/components/ProductLogoOnTop";

export default function PageStructure ({ children }: { children: React.ReactNode }){
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <ImageBackground />
            <RightContainer>
                <ProductLogoOnTop />
                { children }
            </RightContainer>
        </Box>
    )
}