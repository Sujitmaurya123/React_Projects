import { Box } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <Box bgcolor="skyblue" flex={1} p={2}sx={{ display: { xs: "none", sm: "block" } }}>
        sidebar</Box>
    </div>
  )
}

export default Sidebar
