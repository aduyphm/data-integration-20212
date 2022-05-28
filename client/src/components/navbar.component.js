import React, { Component } from "react";
import "./crawl/crawl.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-dark fixed-top bg-light flex-md-nowrap p-2 shadow">
        <a
          className="navbar-brand col-md-3 col-lg-2 me-0 px-3 text-primary fs-4"
          href="/admin"
        >
          <img className="admin-logo-top" src="https://store-images.s-microsoft.com/image/apps.10914.9007199266246939.92fe68b3-e1ba-4ac3-bd37-4bdbb1408cd2.f04875cd-d533-4669-ab17-cf81409a0d10" alt=""/>{" "}
          Quản lý báo mới
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a
              className="nav-link px-3 fw-normal text-primary"
              href="/admin/logout"
            >
              Đăng xuất <i className="fa fa-sign-out" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
