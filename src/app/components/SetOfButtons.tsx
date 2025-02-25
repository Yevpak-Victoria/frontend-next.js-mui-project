import {RegisterButton} from "@/app/components/components/RegisterButton";
import {Box} from "@mui/material";

const registration = ["Google", "Apple", "Dia", "Email"];

export function SetOfButtons() {
    return <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            py: '1vh',
            mt: '1vh',
        }}>
        {registration.map((name) => <RegisterButton
            key={name} registerImgSrc={ '/' + name + '.svg'}> {name} </RegisterButton>)}
    </Box>
}