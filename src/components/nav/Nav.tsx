import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Demo Straming
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      
    </Box>
  );
};
