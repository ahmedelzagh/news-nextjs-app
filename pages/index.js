import Head from "next/head";
import { MongoClient } from "mongodb";
import ArticlesList from "../components/ArticlesList/ArticlesList";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>News App</title>
        <meta name="description" content="Read the Latest News." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticlesList articles={props.news} />
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONOGO_DB_NEWS_APP);
  const db = client.db();

  const newsCollection = db.collection("news");
  const news = await newsCollection.find().toArray();
  client.close();

  return {
    props: {
      news: news.map((article) => ({
        title: article.title,
        date: article.date,
        content: article.content,
        id: article._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
