import PageStructure from '@/app/allPagesComponents/PageStructure'
import RegistrationText from '@/app/allPagesComponents/components/RegistrationText'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import SetOfCustomInputs from '@/app/pages/authorization-through-email/components/SetOfCustomInputs'
import BackButton from '@/app/pages/authorization-through-email/components/BackButton'
import Footnote from '@/app/pages/authorization-through-email/components/Footnote'
import CustomBox from '@/app/pages/authorization-through-email/components/CustomBox'

export default function AuthorizationTroughEmail() {
  return (
    <PageStructure>
      <Box sx={{ mt: 3 }}>
        <BackButton />
        <RegistrationText />

        <CustomBox>
          <Typography variant='h4' sx={{ textAlign: 'center', pt: 2, pb: 1 }}>
            Завершіть створення свого облікового запису для повного використання{' '}
          </Typography>
          <SetOfCustomInputs />

          <Button
            variant='contained'
            color='secondary'
            sx={{
              textTransform: 'none',
              fontWeight: 400,
              borderRadius: '30px',
              mt: 1,
              width: '20vh',
              boxShadow: 0,
            }}
          >
            Створити
          </Button>
          <Footnote />
        </CustomBox>
      </Box>
    </PageStructure>
  )
}
