import {
  AppBar,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "#5800FF",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    textAlign: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit" className={classes.title}>
            © 2022 KDTEC
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
