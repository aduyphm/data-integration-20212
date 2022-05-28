import React, { useState, useEffect } from "react";
import "./article.css";
import { API_URL } from "../../config/Constants";
import axios from "axios";
import { Link, Route, Routes, useParams } from "react-router-dom";

const NewsList = () => {
  const [articles, setarticles] = useState([]);

  useEffect(() => {
    loadArticle();
  }, []);
  const loadArticle = async () => {
    axios.get(`${API_URL}/api/admin/article`).then((response) => {
      setarticles(response.data);
    });
  };

  const deleteArticle = async (id) => {
    await axios.delete(`${API_URL}/api/admin/deleteArticle/${id}`);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h4 className="text-success">Danh sách các bài báo</h4>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {articles.map((val, key) => {
            return (
              <div className="card shadow" id="article">
                <img
                  id="thumbnail"
                  src={val.thumbnail}
                  className="card-img-top shadow mt-3"
                />
                <div className="card-body">
                  <h8 className="card-title">{val.title}</h8>
                </div>
                <div className="btn-group">
                  <Link
                    to={`/admin/article/${val._id}`}
                    className="btn btn-primary mb-1"
                    id="xem"
                  >
                    Xem chi tiết
                  </Link>
                  <a> </a>
                  <a
                    className="btn btn-danger"
                    onClick={() => deleteArticle(val._id)}
                    id="xoa"
                    type="button"
                  >
                    Xóa
                  </a>
                </div>
                <a href={val.link} target="_blank">
                  <i className="fa fa-hand-o-right" aria-hidden="true"></i> Xem
                  bài báo gốc
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
