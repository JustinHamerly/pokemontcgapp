import React from "react";
import { AppBar, Container, Toolbar, Typography, Tabs, Tab } from "@mui/material";

const pages = ['Collection & Decks', 'Play', 'Inventory'];

export default function HeaderBar() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
