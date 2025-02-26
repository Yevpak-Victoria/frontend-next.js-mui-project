import {Box} from "@mui/material";

export default function ImageBackground(){
    return <Box
        component="img"
        src="public/image.svg"
        alt="Background Image"
        sx={{
            width: 'auto%',
            height: "100vh",
            filter: "brightness(50%)",
        }}
    ></Box>
}