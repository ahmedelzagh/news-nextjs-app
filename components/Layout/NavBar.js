import  Link from "next/link";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <h1>
        <a>News App</a>
      </h1>
      <ul>
        <li>
          <Link href="/">All News</Link>
        </li>
        <li>
          <Link href="/new-article">Add Article</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
