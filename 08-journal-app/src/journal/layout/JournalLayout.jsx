import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Box } from "@mui/system";

import { Link as RouterLink } from "react-router-dom";
import { NavBar } from "../components/NavBar";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};