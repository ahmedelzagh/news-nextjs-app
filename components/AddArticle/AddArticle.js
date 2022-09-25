import { Button, Card, Form, Input } from "../UI";
import classes from "./AddArticle.module.css";
import { useInput } from "../../hooks";
const AddArticle = () => {
  const [titleProps, titleValidation, clearTitle] = useInput("", (value) => value.length > 0);
  const [dateProps, dateValidation, clearDate] = useInput("", (value) => value !== "");
  const [articleProps, articleValidation, clearArticle] = useInput("", (value) => value.length > 0 && value.length < 21);

  const formIsValid = titleValidation.valueIsValid && dateValidation.valueIsValid && articleValidation.valueIsValid;

  const addArticleHandler = (e) => {
    e.preventDefault();
    console.log(`title: ${titleProps.value}, date: ${dateProps.value}, article: ${articleProps.value}`);
    clearTitle();
    clearDate();
    clearArticle();
  };

  return (
    <Card variant="light" className={classes.addArticle}>
      <Form onSubmit={addArticleHandler}>
        <Input label="Title" input={{ id: "title", type: "text", ...titleProps }} isInValid={titleValidation.inputIsInvalid} />
        <Input label="Date" input={{ id: "date", type: "date", ...dateProps }} isInValid={dateValidation.inputIsInvalid} />
        <Input label="Article" input={{ id: "article", type: "textarea", maxLength: "20", ...articleProps }} isInValid={articleValidation.inputIsInvalid} />
        <Button variant="secondary" type="submit" disabled={!formIsValid}>
          Add
        </Button>
      </Form>
    </Card>
  );
};

export default AddArticle;
