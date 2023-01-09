import React, { Component } from "react";
import TableDataRow from "./TableDataRow";

class TableData extends Component {
  onDelete = idUser => {
    this.props.delete(idUser);
  };
  mappingData = () =>
    this.props.data.map((value, key) => {
      return (
        <TableDataRow
          key={key}
          stt={key + 1}
          _id={value._id}
          name={value.name}
          phone={value.phone}
          permission={value.permission}
          modify={user => this.props.modify(value)}
          changeUserStatus={() => this.props.changeUserStatus()}
          delete={idUser => this.onDelete(idUser)}
        />
      );
    });

  render() {
    return (
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center">
              <th scope="col" class="py-3 px-6">STT</th>
              <th scope="col" class="py-3 px-6">Tên</th>
              <th scope="col" class="py-3 px-6">Số điện thoại</th>
              <th scope="col" class="py-3 px-6">Loại thành viên</th>
              <th scope="col" class="py-3 px-6">Hành động</th>
            </tr>
          </thead>
          <tbody>{this.mappingData()}</tbody>
        </table>
      </div>
    );
  }
}

export default TableData;
