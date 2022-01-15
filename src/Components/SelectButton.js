import { makeStyles } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
      border: "1px solid #93FFD8",
      borderRadius: 5,
      padding: 7,
      paddingLeft: 18,
      paddingRight: 18,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? "#93FFD8" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "#93FFD8",
        color: "black",
      },
      width: "23%",
        
    },
  });

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;