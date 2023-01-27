import { createUseStyles } from "react-jss";
import Colors from "../common/Colors";
import { CordLogo } from "../assets/CordLogo";
import { Link } from "react-router-dom";
import { cssVar } from "../common/cssVariables";
import { HeaderDropdown } from "../css/headerDropdown";
import { DocsButton } from "./docsButton";

const useStyles = createUseStyles({
  headerContainer: {
    height: "60px",
    width: "100%",
    backgroundColor: Colors.PURPLE,
    display: "flex",
    justifyContent: "space-between",
  },
  logos: {
    display: "flex",
    alignItems: "center",
    paddingLeft: cssVar("space-m"),
  },
  docsIcon: {
    fontSize: cssVar("space-l"),
    color: Colors.WHITE,
    border: `1.5px solid ${Colors.WHITE}`,
    borderRadius: cssVar("space-m"),
    padding: `0 ${cssVar("space-2xs")}`,
    textDecoration: "none",
    lineHeight: "28px",
    display: "flex",
    alignItems: "center",
  },
  rightItems: {
    display: "flex",
    alignItems: "center",
    gap: cssVar("space-m"),
  },
});

export function Header() {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <div className={classes.logos}>
        <Link to="https://cord.com">{CordLogo}</Link>
        <Link to="https://docs.cord.com" style={{ textDecoration: "none" }}>
          <div className={classes.docsIcon}>{"Docs"}</div>
        </Link>
      </div>
      <div className={classes.rightItems}>
        <HeaderDropdown />
        <DocsButton
          type={"black"}
          text={"Sign in to the console"}
          link={"https://console.cord.com"}
        />
      </div>
    </div>
  );
}
