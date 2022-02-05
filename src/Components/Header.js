import React from "react";
import {
  AppBar,
  Container,
  Select,
  Toolbar,
  Typography,
  MenuItem,
  makeStyles,
  createTheme,
  ThemeProvider,
  Box,
} from "@material-ui/core";

import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import Logo from "./logo.png";
import AuthModal from "./Authentication/AuthModal";
import UserSidebar from "./Authentication/UserSidebar";


const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "#5800FF",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useNavigate();

  const { currency, setCurrency, user } = CryptoState();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Box
              component="img"
              sx={{
                height: 40,
                marginLeft: -30,
                marginRight: 10,
              }}
              alt="Your logo."
              src={Logo}
            />
            <Typography
              onClick={() => history("/")}
              className={classes.title}
              variant="h6"
            >
              Crypto Coinex
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"INR"}>INR </MenuItem>
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"GBP"}>GBP</MenuItem>
            </Select>

            {user ? <UserSidebar /> : <AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
