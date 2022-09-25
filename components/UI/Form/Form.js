import classes from "./Form.module.css";

// Wrap any number of Input Components using Form Component, then pass the necessary props.

const Form = (props) => {
  return (
    <form className={`${classes.form} ${props.className ? props.className : ""}`} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

export default Form;
