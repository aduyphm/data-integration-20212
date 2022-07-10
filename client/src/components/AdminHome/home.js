import React, { Component, useState, useEffect } from "react";
import "./home.css";
import { API_URL } from "../../config/Constants";
import axios from "axios";

const Home = () => {
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    axios.get(`${API_URL}/api/admin/article`).then((response) => {
      setarticles(response.data.reverse());
    });
  }, [articles]);
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    axios.get(`${API_URL}/api/admin/categories`).then((response) => {
      setcategories(response.data);
    });
  }, [categories]);
  let day = new Date();
  let num = articles.length;
  let hide = articles.filter((x) => x.status == "An").length;
  let show = num - hide;
  return (
    <div className="container">
      <div className="py-4">
        <h4 className="text-success">Trang chủ</h4>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="news text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Số thành viên đăng ký nhận tin tức
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      <em>Đang cập nhật</em>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-map-marked-alt fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="news text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Tổng số chuyên mục
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-danger-800 text-danger">
                      <em>{categories.length}</em>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-map-marked-alt fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="news text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Số lượng bài báo
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800 text-dark">
                      <em>{num}</em>/<em className="text-danger">{hide}</em>/
                      <em className="text-success">{show}</em>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-map-marked-alt fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card shadow" id="card">
          <img
            id="img"
            src="https://www.wishesmsg.com/wp-content/uploads/good-day-message.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Ngày {day.getDate()}, tháng {day.getMonth()}, năm{" "}
              {day.getFullYear()}
            </p>
            <p className="card-text">
              Thời gian: {day.getHours()}:{day.getMinutes()}:{day.getSeconds()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
