import classes from "./ArticlesList.module.css";
import { Card } from "../UI";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticlesList = ({ articles }) => {
  return (
    <Card className={classes.articlesList}>
      <ul>
        {articles.map((article) => (
          <ArticleListItem key={article.id} data={article} />
        ))}
      </ul>
    </Card>
  );
};

export default ArticlesList;
