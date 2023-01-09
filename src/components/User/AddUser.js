import React, { Component } from "react";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      name: "",
      phone: "",
      permission: ""
    };
  }

  getField = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  checkStatus = () => {
    if (this.props.isDisplayForm === true) {
      return (
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form>
            <div className="card border-primary mb-3 mt-2">
              <div className="text-center text-xl font-medium text-gray-900 dark:text-white mb-5">Tạo người dùng</div>
              <div className="card-body">
                <div className="form-group">
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    type="text"
                    name="name"
                    placeholder="Nhập tên người dùng"
                    onChange={event => this.getField(event)}
                    required
                  />{" "}
                  <br />
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    type="text"
                    name="phone"
                    placeholder="Nhập số điện thoại"
                    onChange={event => this.getField(event)}
                    required
                  />{" "}
                  <br />
                  <div className="form-group">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loại thành viên</label>
                    <select
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="permission"
                      id=""
                      onChange={event => this.getField(event)}
                      required
                    >
                      <option value="">None</option>
                      <option value="1">Quản trị viên</option>
                      <option value="2">Cộng tác viên</option>
                      <option value="3">Thành viên</option>
                    </select>
                  </div>
                  <div className="text-center mt-5">
                    <input
                      type="reset"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={(name, phone, permission) =>
                        this.props.add(
                          this.state.name,
                          this.state.phone,
                          this.state.permission
                        )
                      }
                      value="Thêm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    }
  };
  render() {
    return <div>{this.checkStatus()}</div>;
  }
}

export default AddUser;
