'use client'

import { Box } from '@mui/material'
import { AuthorisationLink } from '@/app/components/AuthorisationLink'
import { SetOfButtons } from '@/app/components/SetOfButtons'
import React from 'react'
import CustomCheckbox from '@/app/components/CustomCheckbox'
import PageStructure from '@/app/allPagesComponents/PageStructure'
import RegistrationText from '@/app/allPagesComponents/components/RegistrationText'

export default function Home() {
  const [checkedTerms, setCheckedTerms] = React.useState(false)
  const [checkedNotifications, setCheckedNotifications] = React.useState(false)

  return (
    <PageStructure>
      <Box sx={{ mt: 3 }}>
        <RegistrationText />
        <SetOfButtons />
        <AuthorisationLink />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
        <CustomCheckbox
          checked={checkedTerms}
          required
          onChange={(e) => setCheckedTerms(e.target.checked)}
        >
          Приймає умови використання та обробки персональних даних?
        </CustomCheckbox>
        <CustomCheckbox
          checked={checkedNotifications}
          onChange={(e) => setCheckedNotifications(e.target.checked)}
        >
          Бажаєте отримувати персоналізовані сповіщення?
        </CustomCheckbox>
      </Box>
    </PageStructure>
  )
}
