'use client'

import ImageBackground from '@/app/allPagesComponents/components/ImageBackground'
import React from 'react'
import { Box } from '@mui/material'
import { RightContainer } from '@/app/allPagesComponents/components/RightContainer'
import ProductLogoOnTop from '@/app/allPagesComponents/components/ProductLogoOnTop'

export default function PageStructure({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <ImageBackground />
      <RightContainer>
        <ProductLogoOnTop />
        {children}
      </RightContainer>
    </Box>
  )
}
