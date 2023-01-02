import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";

class TableDataRow extends Component {
  permissionShow = () => {
    if (this.props.permission === 1) {
      return "Quản trị viên";
    } else if (this.props.permission === 2) {
      return "Cộng tác viên";
    } else {
      return "Thành viên";
    }
  };
  onEdit = () => {
    this.props.modify();
    this.props.changeUserStatus();
  };
  onDelete = idUser => {
    this.props.delete(idUser);
  };
  render() {
    return (
      <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="py-4 px-6">{this.props.stt}</td>
        <td className="py-4 px-6">{this.props.name}</td>
        <td className="py-4 px-6">{this.props.phone}</td>
        <td className="py-4 px-6">{this.permissionShow()}</td>
        <td className="py-4 px-6">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <div
              className="cursor-pointer py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-500 dark:focus:text-white"
              onClick={() => this.onEdit()}
            >
              Chỉnh sửa
            </div>
            <div
              className="cursor-pointer py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-red-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-red-400 dark:focus:ring-blue-500 dark:focus:text-white"
              onClick={idUser => this.onDelete(this.props._id)}
            >
              Xóa
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default TableDataRow;
