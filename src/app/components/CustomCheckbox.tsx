import React, {ReactNode} from 'react';
import {Box, Checkbox, Typography} from "@mui/material";

type CustomCheckboxProps = {
    children: ReactNode;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomCheckbox = ({children, checked, onChange} : CustomCheckboxProps) => {

    return <Box display="flex" alignItems="center">
        <Checkbox checked={checked} onChange={onChange}
                  sx={{
            color: 'primary.main',
            '&.Mui-checked': {
                color: 'secondary.main',
            },
            transform: 'scale(0.7)',
            '& .MuiSvgIcon-root': {
                fontSize: 22, // Менший чекбокс
                strokeWidth: 0.5, // Ще тонший контур
                stroke: 'black', // Колір контуру (можна змінити)
            },
            padding: 0,
        }} />

        <Typography variant="h5" component="span" sx={{fontWeight: '200', color: '#535353'}}>
            {children}
        </Typography>

    </Box>
}

export default CustomCheckbox;