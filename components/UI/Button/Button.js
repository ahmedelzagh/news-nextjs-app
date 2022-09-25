import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={`${classes.button} ${props.variant === "secondary" ? classes.secondary : classes.primary}`} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
