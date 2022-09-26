import Head from "next/head";
import { useRouter } from "next/router";
import AddArticle from "../../components/AddArticle/AddArticle";

const NewArticle = () => {
  const router = useRouter();
  const addArticleHandler = async (articleData) => {
    const res = await fetch("/api/new-article", {
      method: "POST",
      body: JSON.stringify(articleData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Add Article</title>
      </Head>
      <AddArticle onAddArticle={addArticleHandler} />
    </>
  );
};

export default NewArticle;
