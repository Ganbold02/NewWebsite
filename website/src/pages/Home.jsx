import { useEffect, useState } from "react";
import Card from "../components/Card";
import { toast, ToastContainer } from "react-toastify";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  // const handleClose = () => setModalShow(false);
  // const handleShow = () => setModalShow(true);

  useEffect(() => {
    fetch("https://demo-api-one.vercel.app/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.body);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Алдаа гарлаа");
      });
  }, []);
  // const articles = [
  //   {
  //     image:
  //       "https://mgl.gogo.mn/newsn/story/06e0257950004107a2aaa7ec830365a8-63c939980075e396370671.jpg",
  //     title: "Цагдаагийн 102 албан хаагч англи хэл сурахаар Филиппин явна",
  //   },
  //   {
  //     image:
  //       "https://mgl.gogo.mn/newsn/story/article-image-weddinggowns-kim-kardashian-174821-361256301-63c7593367c31750659072.jpeg",
  //     title: "Цагдаагийн 102 албан хаагч англи хэл сурахаар Филиппин явна",
  //   },
  //   {
  //     image:
  //       "https://mgl.gogo.mn/newsn/story/article-image-weddinggowns-kim-kardashian-174821-361256301-63c7593367c31750659072.jpeg",
  //     title: "Цагдаагийн 102 албан хаагч англи хэл сурахаар Филиппин явна",
  //   },
  // ];
  console.log(articles);
  return (
    <main>
      <div className="container">
        <div className="row">
          {articles.map((article) => (
            <div className="col-md-3 col-sm-6 col-12">
              <Card title={article.name} image={article.imageUrl} />
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}
