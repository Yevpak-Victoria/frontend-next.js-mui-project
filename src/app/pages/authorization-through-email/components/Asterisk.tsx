import { Typography } from '@mui/material'
import React from 'react'

export default function Asterisk() {
  return (
    <Typography
      variant='h4'
      sx={{ color: 'red', textJustify: 'center', mt: '1px', pr: 1, fontSize: '1rem' }}
    >
      *
    </Typography>
  )
}
