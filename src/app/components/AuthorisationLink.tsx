import {Box, Link, Typography} from "@mui/material";

export function AuthorisationLink() {
    return <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: "1%",
    }}>
        <Typography variant="h4" component="div" sx={{textTransform: 'none'}}>Вже маєте акаунт?</Typography>
        <Link href="#" sx={{
            color: 'secondary.main',
            typography: 'h4',
            fontWeight: '600',
            textDecoration: 'underline',
            textDecorationColor: 'secondary.main',
        }}> Увійти</Link>
    </Box>
}