import {Button} from "@mui/material";
import {ReactNode} from "react";

interface RegisterButtonProps {
    children: ReactNode;
}

export function RegisterButton( {children}: RegisterButtonProps ) {
    return <Button variant="outlined"
    sx={{
        fontSize: '0.8rem',
        borderRadius: 8,
        m: 1,
        color: "#363636",
        borderColor: "#363636",
        height: "8vh",
        width: "50vh",
    }}>
        Зареєструватись за допомогою {children}
    </Button>
}