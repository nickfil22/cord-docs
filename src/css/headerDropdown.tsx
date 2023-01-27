import { Nav, NavDropdown } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import Colors from "../common/Colors";
import "../headerDropdown.css";

const useStyles = createUseStyles({
  dropdown: {
    color: Colors.WHITE,
  },
  dropdownItem: {
    color: Colors.BLACK,
    backgroundColor: Colors.PURPLE_LIGHT,
    padding: "4px 16px",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      backgroundColor: Colors.PURPLE_LIGHT,
    },
  },
});

export function HeaderDropdown() {
  const classes = useStyles();

  return (
    <NavDropdown title="More" id="nav-more" className={classes.dropdown}>
      <NavDropdown.Item className={classes.dropdownItem}>
        <Nav.Link as={Link} to={"https://cord.com/about"}>
          About
        </Nav.Link>
      </NavDropdown.Item>
      <NavDropdown.Item className={classes.dropdownItem}>
        <Nav.Link as={Link} to={"https://cord.com/pricing"}>
          Pricing
        </Nav.Link>
      </NavDropdown.Item>
    </NavDropdown>
  );
}
