'use client'

import CustomInput from '@/app/pages/authorization-through-email/components/CustomInput'
import { Box } from '@mui/material'
import React, { useState } from 'react'

export default function SetOfCustomInputs() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Box sx={{ alignSelf: 'stretch' }}>
      <CustomInput
        label="Ім'я"
        type='email'
        required
        value={email}
        placeholder='Shambhav@gmail.comi'
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomInput
        label='Пароль'
        type='password'
        required
        value={password}
        placeholder='• • • •'
        onChange={(e) => setPassword(e.target.value)}
      />
    </Box>
  )
}
