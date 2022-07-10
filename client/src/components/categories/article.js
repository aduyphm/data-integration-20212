import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config/Constants";
import "./categories.css";

import { Link, useParams } from "react-router-dom";

const ArticleInC = () => {
  const [category, setcategory] = useState({ category: "" });
  //const [articles, setarticles] = useState([])
  const { id } = useParams();
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    axios.get(`${API_URL}/api/admin/article`).then((response) => {
      setarticles(response.data.reverse());
    });
  }, [articles]);
  const deleteArticle = async (id) => {
    await axios.delete(`${API_URL}/api/admin/deleteArticle/${id}`);
  };
  useEffect(() => {
    loadArticle();
  }, []);
  const loadArticle = async () => {
    const res = await axios.get(`${API_URL}/api/admin/category/${id}`);
    setcategory(res.data);
  };
  return (
    <div className="container">
      <div className="py-4">
        <Link to={"/admin/category"}>
          <i className="fa fa-angle-double-left mt-3" aria-hidden="true"></i>Tất
          cả các chuyên mục
        </Link>
        <h4 className="text-success mt-2">
          {" "}
          Các bài báo thuộc chuyên mục {category.category}
        </h4>
        <br />
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {articles
            .filter((x) => x.category == category.category)
            .map((val, key) => {
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
                    <i className="fa fa-hand-o-right" aria-hidden="true"></i>{" "}
                    Xem bài báo gốc
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default ArticleInC;
