import { Button, Card, Form, Input } from "../UI";
import classes from "./AddArticle.module.css";
import { useInput } from "../../hooks";
const AddArticle = (props) => {
  const [titleProps, titleValidation, clearTitle] = useInput("", (value) => value.length > 0 && value.length < 26);
  const [contentProps, contentValidation, clearContent] = useInput("", (value) => value.length > 0 && value.length < 501);

  const formIsValid = titleValidation.valueIsValid && contentValidation.valueIsValid;

  const addArticleHandler = (e) => {
    e.preventDefault();
    const d = new Date();
    const current_date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    const current_time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    const EnteredData = {
      title: titleProps.value,
      date: `${current_date} at ${current_time}`,
      content: contentProps.value,
    };
    props.onAddArticle(EnteredData);
    clearTitle();
    clearContent();
  };

  return (
    <Card variant="light" className={classes.addArticle}>
      <Form onSubmit={addArticleHandler}>
        <Input label="Title" input={{ id: "title", type: "text", ...titleProps, maxLength: "25" }} isInValid={titleValidation.inputIsInvalid} />
        <Input label="Article" input={{ id: "article", type: "textarea", maxLength: "500", ...contentProps }} isInValid={contentValidation.inputIsInvalid} />
        <Button variant="secondary" type="submit" disabled={!formIsValid}>
          Add
        </Button>
      </Form>
    </Card>
  );
};

export default AddArticle;
