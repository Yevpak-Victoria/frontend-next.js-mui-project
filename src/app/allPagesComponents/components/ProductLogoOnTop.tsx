import {Box} from "@mui/material";

export function ProductLogoOnTop () {
    return <Box
        component="img"
        src="suspilne-logo.svg"
        alt="Logo Suspilne Image"
        sx={{
            width: '20%',
            position: 'absolute',
            top: 0,
        }}
    ></Box>
}