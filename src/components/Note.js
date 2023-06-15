import React from 'react';
import App from '../App.css'
import {Box,Typography} from '@mui/material';
function Note() {
    return (
        <Box className="note">
          <Typography variant="h6">This is the note title</Typography>
          <Typography variant="inherit">This is the note content</Typography>

        </Box>
    );
}

export default Note;