import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  headerContainer: {
    height: "60px",
    width: "100%",
    backgroundColor: "purple",
  },
});

export function Header() {
  const classes = useStyles();

  return <div className={classes.headerContainer}></div>;
}
