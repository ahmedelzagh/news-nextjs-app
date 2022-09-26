import { Button, Card, Form, Input } from "../UI";
import classes from "./AddArticle.module.css";
import { useInput } from "../../hooks";
const AddArticle = (props) => {
  const [titleProps, titleValidation, clearTitle] = useInput("", (value) => value.length > 0);
  const [dateProps, dateValidation, clearDate] = useInput("", (value) => value !== "");
  const [contentProps, contentValidation, clearContent] = useInput("", (value) => value.length > 0 && value.length < 501);

  const formIsValid = titleValidation.valueIsValid && dateValidation.valueIsValid && contentValidation.valueIsValid;

  const addArticleHandler = (e) => {
    e.preventDefault();
    const EnteredData = {
      title: titleProps.value,
      date: dateProps.value,
      content: contentProps.value,
    };
    props.onAddArticle(EnteredData);
    clearTitle();
    clearDate();
    clearContent();
  };

  return (
    <Card variant="light" className={classes.addArticle}>
      <Form onSubmit={addArticleHandler}>
        <Input label="Title" input={{ id: "title", type: "text", ...titleProps }} isInValid={titleValidation.inputIsInvalid} />
        <Input label="Date" input={{ id: "date", type: "date", ...dateProps }} isInValid={dateValidation.inputIsInvalid} />
        <Input label="Article" input={{ id: "article", type: "textarea", maxLength: "500", ...contentProps }} isInValid={contentValidation.inputIsInvalid} />
        <Button variant="secondary" type="submit" disabled={!formIsValid}>
          Add
        </Button>
      </Form>
    </Card>
  );
};

export default AddArticle;
