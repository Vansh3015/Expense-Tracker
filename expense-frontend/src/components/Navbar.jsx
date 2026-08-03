import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontWeight: "bold",
            letterSpacing: "1px"
          }}
        >
          Expense Tracker
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;