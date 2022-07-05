import React from "react";
import "./user.css";

const UserList = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h4 className="text-success">Danh sách người đăng ký</h4>
        <div>
          <div className="admin-subcontent table-responsive">
            <table className="table table-striped table-sm" id="table-xe">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tên người dùng</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserList;
