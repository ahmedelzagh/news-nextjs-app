import NavBar from './NavBar';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <>
      <NavBar />
      <main className={classes.main}>{props.children}</main>
    </>
  );
}

export default Layout;
