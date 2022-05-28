import React, { useState, useEffect } from "react";
import "./categories.css";
import { API_URL } from "../../config/Constants";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [category, setcategory] = useState("");
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    axios.get(`${API_URL}/api/admin/categories`).then((response) => {
      setcategories(response.data);
    });
  }, [categories]);
  //add a new topic
  const addCategory = () => {
    console.log(category);
    axios.post(`${API_URL}/api/admin/categories`, { category: category });
    setcategories([...categories, { category: category }]);
  };
  const onInputChange = (event) => {
    const { value, name } = event.target;
    setcategory({ ...category, [name]: value });
  };
  const updateCategory = (id) => {
    const newCategory = prompt("Nhập tên chuyên mục muốn thay đổi: ");
    axios
      .put(`${API_URL}/api/admin/updatecategory`, {
        id: id,
        newCategory: newCategory,
      })
      .then(() => {
        setcategories(
          categories.map((val) => {
            return val._id == id ? { _id: id, category: val.newCategory } : val;
          })
        );
      });
  };
  //Delete topic
  const deleteCategory = async (id) => {
    await axios.delete(`${API_URL}/api/admin/delete/${id}`);
  };
  //UI
  return (
    <div className="container">
      <div className="py-4">
        <h4 className="text-success">Điền form dưới đây để thêm chuyên mục</h4>
        <form>
          <div className="input-group flex-nowrap shadow" id="them">
            <span className="input-group-text" id="addon-wrapping">
              Tên chuyên mục{" "}
            </span>
            <input
              className="form-control"
              onChange={(event) => setcategory(event.target.value)}
              placeholder="Nhập tên chuyên mục muốn thêm "
            />
            <button className="btn btn-primary" onClick={addCategory}>
              Thêm
            </button>
          </div>
        </form>
        <h4 className="text-success">Danh sách các chuyên mục</h4>
        <div>
          <div className="admin-subcontent table-responsive">
            <table className="table table-striped table-sm" id="table-xe">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tên chuyên mục</th>
                  <th scope="col">Các bài báo</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((val, key) => {
                  return (
                    <tr>
                      <td>{key + 1}</td>
                      <td>{val.category}</td>
                      <td>
                        <Link
                          to={`/admin/category/${val._id}`}
                          className="btn btn-primary"
                        >
                          Xem
                        </Link>
                      </td>
                      <td>
                        <a
                          className="btn btn-primary"
                          onClick={() => updateCategory(val._id)}
                          type="button"
                        >
                          <i className="fa fa-pencil"></i>{" "}
                        </a>
                        <a
                          className="btn btn-danger"
                          onClick={() => deleteCategory(val._id)}
                          type="button"
                        >
                          <i className="fa fa-trash"></i>
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
export default Categories;
