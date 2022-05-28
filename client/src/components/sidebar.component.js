import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu "
            className="start-0 col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"
          >
            <div className="position-fixed start-0 pt-3 col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse vh-100 ">
              <ul className="nav flex-column ">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/admin"
                  >
                    <span className="icon">
                      <i className="fa fa-home" aria-hidden="true"></i>
                    </span>{" "}
                    Trang chủ
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/admin"
                  >
                    <span className="icon"></span>
                  </a>
                </li>
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link text-light">
                    <span className="icon">
                      <i className="fa fa-home" aria-hidden="true"></i>
                    </span>{" "}
                    Trang chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/admin/category"} className="nav-link text-light">
                    <span className="icon">
                      <i className="fa fa-file-text " aria-hidden="true"></i>{" "}
                    </span>
                    Quản lý chuyên mục
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/admin/news"} className="nav-link text-light">
                    <span className="icon">
                      <i className="fa fa-newspaper-o" aria-hidden="true"></i>{" "}
                    </span>
                    Các bài báo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/admin/crawl"} className="nav-link text-light">
                    <span className="icon">
                      <i className="fa fa-database" aria-hidden="true"></i>{" "}
                    </span>
                    Thu thập thủ công
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/admin/users"} className="nav-link text-light">
                    <span className="icon">
                      <i className="fa fa-user-circle-o" aria-hidden="true"></i>{" "}
                    </span>
                    Người đăng ký
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/admin/static"} className="nav-link text-light">
                    <span className="icon">
                      <i className="fa fa-mouse-pointer" aria-hidden="true"></i>{" "}
                    </span>
                    Quản lý nguồn
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
