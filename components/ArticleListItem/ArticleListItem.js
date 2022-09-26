import classes from "./ArticleListItem.module.css";
import { useRouter } from "next/router";
import { Card, Button } from "../UI";

const ArticleListItem = ({ data }) => {
  const router = useRouter();

  const showArticleHandler = () => {
    router.push("/" + data.id);
  };

  return (
    <Card className={classes.articleListItem} variant="dark">
      <li>
        <h1>{data.title}</h1>
        <p>{data.content.slice(0, 100)}...</p>
        <span>Date: {data.date}</span>
        <Button onClick={showArticleHandler}>Read</Button>
      </li>
    </Card>
  );
};

export default ArticleListItem;
