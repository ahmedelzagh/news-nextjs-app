import classes from "./Card.module.css";

const Card = (props) => {
  let classesNames = `${classes.card} ${props.className ? props.className : ""}  ${props.variant ? classes[props.variant] : ""}`;
  return (
    <div className={classesNames}>
      {props.children}
    </div>
  );
};

export default Card;
