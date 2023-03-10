import { useEffect } from "react";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <a className="brand" href="/">
                My Blog
              </a>
            </div>
            <div>
              <div className="search-btn">
                <IoSearchOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <nav>
            <ul>
              <li>
                <a href="/">Нүүр</a>
              </li>
              {categories.map((item, index) => (
                <li key={index}>
                  <Link to={`category/${item.name}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
