import { Box, FormControl, FormHelperText, Input, InputLabel, Typography } from "@mui/material"

type UserType = {
    users: string
    name: string
    status: string
}

const userSection = ({users, name, status}:UserType) =>{

    return (
        <Box>
         <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        </Box>

    )
    
}

export default userSection

