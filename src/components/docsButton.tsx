import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import Colors from "../common/Colors";
import { cssVar } from "../common/cssVariables";

const useStyles = createUseStyles({
  signin: {
    color: Colors.WHITE,
    borderRadius: cssVar("space-3xl"),
    padding: `${cssVar("space-2xs")} ${cssVar("space-m")}`,
    border: "none",
    textDecoration: "none",
    "&:hover": {
      color: Colors.WHITE,
    },
  },
});

type DocsButtonProps = {
  type: "black" | "purple";
  text: string;
  link: string;
};
export function DocsButton(props: DocsButtonProps) {
  const classes = useStyles();
  return (
    <Link
      to={props.link}
      className={classes.signin}
      style={{
        backgroundColor:
          props.type === "black" ? Colors.BLACK : Colors.PURPLE_LIGHT,
      }}
    >
      {"Sign in to the console"}
    </Link>
  );
}
