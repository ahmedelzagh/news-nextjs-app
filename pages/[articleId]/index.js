import ViewArticle from "../../components/ViewArticle/ViewArticle";
import { MongoClient, ObjectId } from "mongodb";

const ArticleDetails = (props) => {
  return <ViewArticle data={props.articleData} />;
};

export async function getStaticPaths() {
  const client = await MongoClient.connect("mongodb+srv://ahmed:BGuiep8nyWJPOz6H@cluster0.5sx13xz.mongodb.net/news-app?retryWrites=true&w=majority");
  const db = client.db();
  const newsCollection = db.collection("news");
  const news = await newsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: true,
    paths: news.map((article) => ({
      params: {
        articleId: article._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const articleId = context.params.articleId;

  const client = await MongoClient.connect("mongodb+srv://ahmed:BGuiep8nyWJPOz6H@cluster0.5sx13xz.mongodb.net/news-app?retryWrites=true&w=majority");
  const db = client.db();
  const newsCollection = db.collection("news");
  const selectedArticle = await newsCollection.findOne({ _id: ObjectId(articleId) });
  client.close();

  return {
    props: {
      articleData: {
        id: selectedArticle._id.toString(),
        title: selectedArticle.title,
        date: selectedArticle.date,
        content: selectedArticle.content,
      },
    },
    revalidate: 1,
  };
}

export default ArticleDetails;
