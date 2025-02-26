import {Box} from "@mui/material";

export default function ImageBackground(){

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    return <Box
        component="img"
        src={`${basePath}/image.svg`}
        alt="Background Image"
        sx={{
            width: 'auto%',
            height: "100vh",
            filter: "brightness(50%)",
        }}
    ></Box>
}