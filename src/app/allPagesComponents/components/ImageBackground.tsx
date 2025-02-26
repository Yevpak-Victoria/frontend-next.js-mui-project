import { Box } from "@mui/material";

export default function ImageBackground() {

    return (
        <Box
            component="img"
            src='/image.svg'
            alt="Background Image"
            sx={{
                width: "100%",
                height: "100vh",
                filter: "brightness(50%)",
            }}
        />
    );
}
