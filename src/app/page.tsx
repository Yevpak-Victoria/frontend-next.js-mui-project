import {Box, Typography} from "@mui/material";
import { red } from "@mui/material/colors";
import {RegisterButton} from "@/app/components/RegisterButton";

const registr = ["Google", "Apple", "Dia", "Email"];

export default function Home() {
  return <Box sx={{
    color: red,
    display: 'flex',
    flexDirection: 'row',
  }}>
    <Box
        component="img"
        src="/image.png"
        alt="Background Image"
        sx={{
          width: 'auto%',
          height: "100vh",
          filter: "brightness(50%)",
        }}
    ></Box>
    <Box component="div" className="rightContainer" sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        px: 20,
    }}>

        <Box
            component="img"
            src="/suspilne-logo.png"
            alt="Logo Suspilne Image"
            sx={{
                width: '35%',

            }}
        ></Box>

      <Typography component="h1" sx={{
          fontSize: '1.5rem',
          width: '100%',
          textAlign: 'center',
      }}>Реєстрація</Typography>
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            {registr.map((name) => <RegisterButton key={name}> {name} </RegisterButton>)}
        </Box>

    </Box>
  </Box>;
}
