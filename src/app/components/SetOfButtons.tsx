import {RegisterButton} from "@/app/components/components/RegisterButton";
import {Box} from "@mui/material";
import { useRouter } from "next/navigation";

const registration = ["Google", "Apple", "Dia", "Email"];

export function SetOfButtons() {

    const router = useRouter();

    return <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            py: '1vh',
            mt: '1vh',
        }}>
        {registration.map((name) => <RegisterButton
            key={name} registerImgSrc={ name + '.svg'}
            onClick={() => {
                if (name === "Email") {
                    router.push("/pages/authorization-through-email");
                }
            }}
        > {name} </RegisterButton>)}
    </Box>
}