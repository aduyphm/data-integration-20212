import React, { useState, useEffect } from "react";
import "./url.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../../config/Constants";

const Url = () => {
  const [source, setsource] = useState("");
  const [url, seturl] = useState("");
  const [list, setlist] = useState([]);
  useEffect(() => {
    axios.get(API_URL + "/api/admin/url").then((response) => {
      setlist(response.data.reverse());
    });
  }, [list]);
  const AddUrl = () => {
    axios.post(API_URL + "/api/admin/url", { source: source, url: url });
  };
  const deleteUrl = async (id) => {
    await axios.delete(`${API_URL}/api/admin/deleteUrl/${id}`);
  };
  return (
    <div className="container">
      <div className="py-4">
        <h4 class="text-success">Thêm URL</h4>
        <div class="card-body">
          <form>
            <select
              class="form-select mb-3"
              onChange={(event) => setsource(event.target.value)}
            >
              <option selected>Nguồn báo</option>
              <option value="Kienthuc.vn">Kienthuc.vn</option>
              <option value="Laodong.vn">Laodong.vn</option>
              <option value="Vnexpress.vn">Vnexpress</option>
              <option value="Nguoilambao.vn">Nguoilambao.vn</option>
              <option value="Thanhnien.vn">Thanhnien.vn</option>
            </select>
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Nhap url"
              onChange={(event) => seturl(event.target.value)}
              required
            />
            <button type="submit" class="btn btn-primary" onClick={AddUrl}>
              Thêm{" "}
            </button>
          </form>
        </div>
        <h4 class="text-success mt-1">Danh sách nguồn </h4>
        <div>
          <div class="admin-subcontent table-responsive">
            <table class="table table-striped table-sm" id="table-xe">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Source</th>
                  <th scope="col">Url</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {list.map((val, key) => {
                  return (
                    <tr>
                      <td>{key + 1}</td>
                      <td>{val.source}</td>
                      <td>{val.url}</td>
                      <td>
                        <Link
                          to={`/admin/url/${val._id}`}
                          class="btn btn-primary"
                          type="button"
                        >
                          <i class="fa fa-pencil"></i>{" "}
                        </Link>
                        <a> </a>
                        <a
                          class="btn btn-danger"
                          onClick={() => deleteUrl(val._id)}
                          type="button"
                        >
                          <i class="fa fa-trash"></i>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Url;
