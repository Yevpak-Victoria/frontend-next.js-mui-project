import {Box, TextField, Typography} from "@mui/material";
import Asterisk from "@/app/pages/authorization-through-email/components/Asterisk";

interface CustomInputProps {
    label: string;
    required?: boolean;
    value: string;
    type?: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function CustomInput({ label, required, ...props }: CustomInputProps) {


    return <Box sx={{py: 1, px: 0}}>
            <Typography variant="h4" sx={{mb: 1}}>
                {label}
            </Typography>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <TextField
                    variant="outlined"
                    fullWidth
                    required={required}
                    size="small"
                    {...props}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '10px',
                            height: '5.5vh',
                            typography: 'h4'
                        },
                        '&:hover': {
                            borderColor: 'secondary.main'
                        }

                    }}
                />
                <Box sx={{mt: '5px', ml: '5px'}}>
                    <Asterisk/>
                </Box>

            </Box>


    </Box>

}