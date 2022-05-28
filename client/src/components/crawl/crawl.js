import React, { useState } from "react";
import { API_URL } from "../../config/Constants";
import "./crawl.css";
import axios from "axios";

const Crawl = () => {
  const [article, setarticle] = useState({
    link: "",
    title: "",
    thumbnail: "",
    sapo: "",
    source: "",
    category: "",
    status: "",
    time: "",
  });
  const onInputChange = (event) => {
    const { value, name } = event.target;
    setarticle({ ...article, [name]: value });
  };
  let day = new Date();
  const Add = () => {
    axios.post(API_URL + "/api/admin/article", article);
  };
  return (
    <div className="container">
      <div className="py-4">
        <h4 className="text-success">Thu thập các bài báo</h4>
        <form>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              name="title"
              onChange={onInputChange}
            />
            <label for="floatingInput">Tiêu đề</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              name="link"
              onChange={onInputChange}
            />
            <label for="floatingInput">Link</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              name="thumbnail"
              onChange={onInputChange}
            />
            <label for="floatingInput">Thumbnail</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              id="floatingTextarea2"
              name="sapo"
              onChange={onInputChange}
            ></textarea>
            <label for="floatingTextarea2">Sapo</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              name="source"
              onChange={onInputChange}
            />
            <label for="floatingInput">Source</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              name="category"
              onChange={onInputChange}
            />
            <label for="floatingInput">Category</label>
          </div>
          <div className="form-floating mb-3">
            <select
              className="custom-select custom-select-lg mb-3 form-control"
              name="status"
              onChange={onInputChange}
            >
              <option selected>Chọn trạng thái</option>
              <option value="Hien">Hiện</option>
              <option value="An">Ẩn</option>
            </select>
            <label for="floatingInput">Trạng thái</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              name="time"
              onChange={onInputChange}
              value={day}
            />
            <label for="floatingInput">Time</label>
          </div>
          <button className="btn btn-primary" onClick={Add}>
            Crawl
          </button>
        </form>
      </div>
    </div>
  );
};

export default Crawl;
