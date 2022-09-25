import classes from "./Input.module.css";

// Input Component will be expecting an input object input={id: "", type: "", value: "", onChange: "", ... }
// besides a Label string, and isInValid property to show the error message under the in valid input,

const Input = (props) => {
  const styles = `${classes.input} ${props.isInValid ? classes.invalid : ""}`;
  return (
    <p className={styles}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {props.input.type === "textarea" && <textarea {...props.input} />}
      {props.input.type !== "textarea" && <input {...props.input} />}
      {props.isInValid && <span className={classes.displayError}>Please Enter a valid {props.label}</span>}
    </p>
  );
};

export default Input;
