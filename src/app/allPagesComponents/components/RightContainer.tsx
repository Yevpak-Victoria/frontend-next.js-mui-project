import { Box } from '@mui/material'
import { ReactNode } from 'react'

interface RightContainerProps {
  children: ReactNode
}

export function RightContainer({ children }: RightContainerProps) {
  return (
    <Box
      component='div'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        px: '13%',
        position: 'relative',
      }}
    >
      {children}
    </Box>
  )
}
