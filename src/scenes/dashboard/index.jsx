import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from '../../components/Header';

const Dashboard = () => {
  return (
    <Box m="25px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center"> 
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard"></Header>
      </Box>
    </Box>
  )
}

export default Dashboard
