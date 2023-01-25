import { useEffect, useState } from "react";
import Card from "../components/Card";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [articles, setArticles] = useState([]);
  // const [modalShow, setModalShow] = useState(false);

  // const handleClose = () => setModalShow(false);
  // const handleShow = () => setModalShow(true);

  useEffect(() => {
    axios.get("http://localhost:8000/Article").then((res) => {
      setArticles(res.data);
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
          {articles.map((article, index) => (
            <div key={index} className="col-md-3 col-sm-6 col-12">
              <Link to={`post/${article.id}`}>
                <Card title={article.name} image={article.imageUrl} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <ToastContainer />
    </main>
  );
}
