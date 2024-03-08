import React from 'react';
import {Box} from "@mui/material";
import {Board} from "./components/board/Board";

function App() {

  return (
        <Box sx={{backgroundColor: 'pink', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Board/>
        </Box>
  );
}

export default App;
