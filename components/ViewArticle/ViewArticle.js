import classes from "./ViewArticle.module.css";
import Head from "next/head";
import { Card } from "../UI";

const ViewArticle = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Card className={classes.viewArticle}>
        <h1>{data.title}</h1>
        <span>{data.date}</span>
        <p>{data.content}</p>
      </Card>
    </>
  );
};

export default ViewArticle;
