import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export default function HeaderBar() {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography>
            Pokemon TCG App
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
