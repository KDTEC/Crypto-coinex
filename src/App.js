import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import CoinPage from "./Pages/CoinPage";
import HomePage from "./Pages/HomePage";
import { makeStyles } from "@material-ui/core";
import Footer from "./Components/Footer";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} exact/>
          <Route path="/coins/:id" element={<CoinPage />} exact/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
