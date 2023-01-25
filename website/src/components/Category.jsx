import { useEffect, useState } from "react";
import Card from "../components/Card";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Category() {
  const [category, setCategory] = useState([]);
  const { title } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8000/category/${title}`).then((res) => {
      setCategory(res.data);
    });
  }, [title]);
  return (
    <main>
      <div className="container">
        <div className="row">
          {category.map((article, index) => (
            <div key={index} className="col-md-3 col-sm-6 col-12">
              <Link to={`Article/${article.id}`}>
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
