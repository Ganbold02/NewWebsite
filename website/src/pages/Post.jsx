import { useEffect, useState } from "react";
import Card from "../components/Card";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Post() {
  const [articles, setArticles] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:8000/Article/${id}`).then((res) => {
      setArticles(...res.data);
    });
  }, []);
  console.log(articles);
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>{articles.name}</h1>
            <div>
              <img src={articles.imageUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}
